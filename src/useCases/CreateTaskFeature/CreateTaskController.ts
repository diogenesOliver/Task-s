import { StatusCodes } from '../../logs/statusCode'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'

import { CreateTaskService } from '../../repositories/CreateTaskService/CreateTaskService'

import { countOfDaysToCompleteATask } from './countDayTaskDay'
import { setEndsDate } from './setEndsDate_Function'

export class CreateTaskController {
	constructor(
		private createTaskService: CreateTaskService
	) { }

	async createTaskController(app: FastifyInstance) {
		app.post('/create/task', async (request, reply) => {
			try {
				const inputDataValidation = z.object({
					title: z.string(),
					description: z.string(),
					difficulty: z.number(),
					endsDate: z.string(),
					authorId: z.string().cuid()
				})

				const taskData = inputDataValidation.parse(request.body)

				setEndsDate(taskData.endsDate)

				await countOfDaysToCompleteATask(
					taskData.endsDate
				)

				if (!(taskData.difficulty > 0 && taskData.difficulty <= 9))
					return reply.status(StatusCodes.BadRequest).send('Invalid value from difficulty level.')

				await new CreateTaskService().save(taskData)
				return reply.status(StatusCodes.SuccessfullyCreated).send({
					message: 'Task created successfully'
				})
			} catch (e) {
				console.error(e)
				reply.status(StatusCodes.ServerError).send('Internal Error - [500]')
			}
		})
	}
}