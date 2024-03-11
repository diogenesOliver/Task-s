import { StatusCodes } from '../../logs/statusCode'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'

import { CreateCommentService } from '../../repositories/CreateCommentService/CreateCommentsService'
import { commenting } from '../../utils/comments-pub-sub'

export class CreateCommentController {
	
	constructor(
		private createCommentService: CreateCommentService
	){}

	createCommentController = async (app: FastifyInstance) => {
		app.post('/create/comment', async (request, reply) => {
			try {
				const inputDataValidation = z.object({
					comment: z.string(),
					taskId: z.string().cuid()
				})

				const { taskId } = inputDataValidation.parse(request.body)

				await this.createCommentService.save(
					inputDataValidation.parse(request.body)
				)

				reply.status(StatusCodes.SuccessfullyCreated).send({
					message: 'Comment added succesfully'
				})

				commenting.publish(
					taskId,
					inputDataValidation.parse(request.body)
				)

			} catch (e) {
				console.log(e)
				reply.status(StatusCodes.ServerError).send('Inetrnal Error - 500')
			}
		})
	}
}

export const createCommentInstance = new CreateCommentController(
	new CreateCommentService()
)