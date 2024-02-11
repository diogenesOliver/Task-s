import { config } from 'dotenv'
config()

import { StatusCodes } from '../../logs/statusCode'

import { Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { getRedis, redisClient, setRedis } from '../../redisConfig'
import { UserLoginService } from '../../repositories/LoginUserService/LoginUserService'
import { User } from '@prisma/client'

import { verifyPasswordWithCryptPassword } from './verifyPassword_Function'
import { generateAToken } from './generateToken_Function'

export class UserLoginController {
	constructor(
		private userLoginService: UserLoginService
	) { }

	async verifyEmailInDatabase(req: Request, res: Response) {
		try {
			const inputData: User = req.body
			const userFromCache = await getRedis('userLogin').catch(err => {
				console.error('Error fetching from Redis: ', err)
			})
			
			if(userFromCache){
				res.status(StatusCodes.Success).send(JSON.parse(userFromCache))
				return redisClient.del('userLogin', err => {
					if(err) throw Error()
				})
			}

			const findEmail = await this.userLoginService.findData(inputData.email)
			await setRedis('userLogin', JSON.stringify(findEmail))

			const user: boolean = await verifyPasswordWithCryptPassword(inputData.password, findEmail.password)
			if (user == false)
				return res.status(StatusCodes.NotFound).json({ msg: 'Non-descript password' })

			const token: string = generateAToken(findEmail.id.toString())
			req.headers.authorization = token

			const authToken: string = req.headers.authorization
			if (!authToken)
				return res.status(StatusCodes.NoAtuhorized).send('Token is missing')

			try {
				verify(authToken, process.env.SECRET_KEY as string)
				return res.status(StatusCodes.Success).json(findEmail)
			} catch (e: any) {
				return res.status(StatusCodes.NoAtuhorized).send('Invalid Token')
			}

		} catch (e) {
			console.error('An error occurred:', e)
			res.status(StatusCodes.ServerError).send(`Internal Server Error: ${e}`)
		}
	}
}