import { StatusCodes } from '../../logs/statusCode'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'

import { GetUserService } from '../../repositories/GetUserService/GetUsersService'
import { getRedis, redisClient, setRedis } from '../../redisConfig'

export class GetUserController {
	constructor(
		getUserService: GetUserService
	) {}

	async getUserController(app: FastifyInstance) {
		app.get('/user/:id', async (request, reply) => {
			try {
				const userFromCache = await getRedis('user')
				if (userFromCache)
					return reply.status(StatusCodes.Success).send(JSON.parse(userFromCache))

				const getUserParam = z.object({
					id: z.string().cuid()
				})

				const { id } = getUserParam.parse(request.params)

				const user = await new GetUserService().get(id)
				await setRedis('user', JSON.stringify(user))

				return reply.status(StatusCodes.Success).send(user)
			} catch (e) {
				console.error(e)
				reply.status(StatusCodes.ServerError).send('Internal Error - [500]')
			}
		})
	}
}