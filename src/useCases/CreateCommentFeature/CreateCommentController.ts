import { StatusCodes } from '../../logs/statusCode'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'

import { CreateCommentService } from '../../repositories/CreateCommentService/CreateCommentsService'
import { commenting } from '../../utils/comments-pub-sub'

export class CreateCommentController {
	async createCommentController(app: FastifyInstance) {
		app.post('/create/comment', async (request, reply) => {
			try {
				const inputDataValidation = z.object({
					comment: z.string(),
					taskId: z.string().cuid()
				})

				await new CreateCommentService().save(
					inputDataValidation.parse(request.body)
				)

				reply.status(StatusCodes.SuccessfullyCreated).send({
					message: 'Comment added succesfully'
				})
			} catch (e) {
				console.log(e)
				reply.status(StatusCodes.ServerError).send('Inetrnal Error - 500')
			}
		})
	}
}

export const createCommentInstance = new CreateCommentController()