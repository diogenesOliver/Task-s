import { StatusCodes } from '../../logs/statusCode'
import { FastifyInstance } from 'fastify'

import { getRedis, setRedis, redisClient } from '../../redisConfig'
import { GetTasksService } from '../../repositories/GetTaskService/GetTasksService'

export class GetTaskController {
	constructor(
		private getTaskService: GetTasksService
	) { }

	async getTaskController(app: FastifyInstance) {
		app.get('/all/tasks', async (request, reply) => {
			try {
				const tasksFromCache = await getRedis('tasks')
				if (tasksFromCache)
					return reply.send(JSON.parse(tasksFromCache))

				const tasks = await new GetTasksService().returninAll()
				await redisClient.set('tasks', JSON.stringify(tasks), 'EX', 10)
				
				return reply.status(StatusCodes.Success).send(tasks)
			} catch (e) {
				console.error(e)
				reply.status(StatusCodes.ServerError).send('Internal Error - [500]')
			}
		})
	}
}