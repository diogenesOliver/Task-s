import { StatusCodes } from '../../logs/statusCode'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'

import { DeleteTaskService } from '../../repositories/DeleteTaskService/DeletTaskRepository'

export class DeleteTaskController {
	constructor(
		private deleteTaskService: DeleteTaskService
	) { }

	deleteTaskController = async (app: FastifyInstance) => {
		app.delete('/delete/task/:id', async (request, reply) => {
			try {
				const getParam = z.object({
					id: z.string().cuid()
				})
				const { id } = getParam.parse(request.params)

				await this.deleteTaskService.deleteData(id)

				return reply.status(StatusCodes.Success).send({ msg: 'Task deleted successfully' })
			} catch (e: any) {
				console.error(e)
				reply.status(StatusCodes.ServerError).send('Internal Error - [500]')
			}
		})
	}
}

export const deleteTaskInstance = new DeleteTaskController(
	new DeleteTaskService()
)