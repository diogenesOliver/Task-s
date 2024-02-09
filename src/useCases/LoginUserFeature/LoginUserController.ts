import { config } from 'dotenv'
config()

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
				res.status(200).send(JSON.parse(userFromCache))
				return redisClient.del('userLogin', err => {
					if(err) throw Error()
				})
			}

			const findEmail = await this.userLoginService.findData(inputData.email)
			await setRedis('userLogin', JSON.stringify(findEmail))

			const user: boolean = await verifyPasswordWithCryptPassword(inputData.password, findEmail.password)
			if (user == false)
				return res.status(404).json({ msg: 'Non-descript password' })

			const token: string = generateAToken(findEmail.id.toString())
			req.headers.authorization = token

			const authToken: string = req.headers.authorization
			if (!authToken)
				return res.status(401).send('Token is missing')

			try {
				verify(authToken, process.env.SECRET_KEY as string)
				return res.status(200).json(findEmail)
			} catch (e: any) {
				return res.status(400).send('Invalid Token')
			}

		} catch (e) {
			console.error('An error occurred:', e)
			res.status(500).send(`Internal Server Error: ${e}`)
		}
	}
}