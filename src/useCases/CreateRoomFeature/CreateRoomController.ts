import { StatusCodes } from '../../logs/statusCode'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'

import { CreateRoomService } from '../../repositories/CreateRoomService/CreateRoomService'

export class CreateRoomController{
	constructor(
		private createRoomService: CreateRoomService 
	){}
    
	createRoomController = async (app: FastifyInstance) => {
		app.post('/create/room', async (request, reply) => {
			try{
				const inputDataValidation = z.object({
					name: z.string(),
					tasks_number: z.number(),
					userId: z.string()
				})

				const roomData = inputDataValidation.parse(request.body)

				await this.createRoomService.save(roomData)
				return reply.status(StatusCodes.SuccessfullyCreated).send(roomData)
			}catch(e){
				console.error(e)
				reply.status(StatusCodes.ServerError).send('Internal Error - [500]')
			}
		})
	}
}