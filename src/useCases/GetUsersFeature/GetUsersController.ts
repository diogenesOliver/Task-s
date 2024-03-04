import { StatusCodes } from '../../logs/statusCode'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'

import { GetUserService } from '../../repositories/GetUserService/GetUsersService'
import { redisClient } from '../../redisConfig'

export class GetUserController {
	constructor(
		getUserService: GetUserService
	) { }

	async getUserController(app: FastifyInstance) {
		app.get('/user/:id', async (request, reply) => {
			try {

				const getUserParam = z.object({
					id: z.string().cuid()
				})

				const { id } = getUserParam.parse(request.params)

				const userFromCache = await redisClient.get('user')
				if (userFromCache)
					return reply.status(StatusCodes.Success).send(JSON.parse(userFromCache))

				const user = await new GetUserService().get(id)
				await redisClient.set('user', JSON.stringify(user), 'EX', 60)

				return reply.status(StatusCodes.Success).send(user)
			} catch (e) {
				console.error(e)
				reply.status(StatusCodes.ServerError).send('Internal Error - [500]')
			}
		})
	}
}