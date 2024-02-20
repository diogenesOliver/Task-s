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

import { FastifyInstance } from 'fastify'
import { z } from 'zod'

export class UserLoginController {
	constructor(
		private userLoginService: UserLoginService
	) { }

	async verifyEmailInDatabase(app: FastifyInstance) {
		app.post('/user/sign-up', async (request, reply) => {
			try {
				const inputDataValidation = z.object({
					email: z.string().email(),
					password: z.string()
				})
				const { email, password } = inputDataValidation.parse(request.body)

				const userFromCache = await getRedis('userLogin').catch(err => {
					console.error('Error fetching from Redis: ', err)
				})

				if (userFromCache) {
					reply.status(StatusCodes.Success).send(JSON.parse(userFromCache))
					return redisClient.del('userLogin', err => {
						if (err) throw Error()
					})
				}

				const findEmail = await new UserLoginService().findData(email)
				await setRedis('userLogin', JSON.stringify(findEmail))

				const user: boolean = await verifyPasswordWithCryptPassword(password, findEmail.password)
				if (user == false)
					return reply.status(StatusCodes.NotFound).send({ msg: 'Non-descript password' })

				const token: string = generateAToken(findEmail.id.toString())
				request.headers.authorization = token

				const authToken: string = request.headers.authorization
				if (!authToken)
					return reply.status(StatusCodes.NoAtuhorized).send('Token is missing')

				try {
					verify(authToken, process.env.SECRET_KEY as string)
					return reply.status(StatusCodes.Success).send(findEmail)
				} catch (e: any) {
					return reply.status(StatusCodes.NoAtuhorized).send('Invalid Token')
				}

			} catch (e) {
				console.error('An error occurred:', e)
				reply.status(StatusCodes.ServerError).send(`Internal Server Error: ${e}`)
			}
		})
	}
}