import { StatusCodes } from '../../logs/statusCode'
import { FastifyInstance } from 'fastify'
import { z } from 'zod' 

import { CreateCommentService } from '../../repositories/CreateCommentService/CreateCommentsService'
import { commenting } from '../../utils/comments-pub-sub'

export class CreateCommentController {
	async createCommentController(app: FastifyInstance){
		app.post('/create/comment/', async (request, reply) => {
			const inputDataValidation = z.object({
				comment: z.string(),
				taskId: z.string().cuid()
			})

			const { comment } = inputDataValidation.parse(request.body)
			await new CreateCommentService().save(comment)

			reply.status(StatusCodes.SuccessfullyCreated).send({
				message: 'Comment added succesfully'
			})

		})
	}
}

export const createCommentInstance = new CreateCommentController()