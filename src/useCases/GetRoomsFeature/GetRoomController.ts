import { StatusCodes } from '../../logs/statusCode'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'

import { GetRoomsService } from '../../repositories/GetRoomsService/GetRoomsService'

export class GetRoomsController {
	constructor(
        private getRoomsService: GetRoomsService
	) { }

	getRoomController = async (app: FastifyInstance) => {
		app.get('/rooms', async (reques, reply) => {
			try {
				const rooms = await this.getRoomsService.returninAll()
				return reply.status(StatusCodes.Success).send(rooms)
			} catch (e) {
				console.error(e)
				reply.status(StatusCodes.ServerError).send('Internal Error - [500]')
			}
		})
	}
}

export const getRoomsInstance = new GetRoomsController(
	new GetRoomsService()
)