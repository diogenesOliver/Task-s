import { StatusCodes } from '../../logs/statusCode'
import { FastifyInstance } from 'fastify'

/* import { getRedis, setRedis, redisClient } from '../../redisConfig' */
import { GetTasksService } from '../../repositories/GetTaskService/GetTasksService'

export class GetTaskController {
	constructor(
		private getTaskService: GetTasksService
	) { }

	async getTaskController(app: FastifyInstance) {
		app.get('/all/tasks', async (request, reply) => {
			try {
				/* const tasksFromCache = await getRedis('tasks')
				if (tasksFromCache) {
					reply.send(JSON.parse(tasksFromCache))
					return redisClient.del('tasks', (err) => {
						if (err) throw Error()
					})
				} */

				const tasks = await new GetTasksService().returninAll()
				/* await setRedis('tasks', JSON.stringify(tasks)) */

				return reply.status(StatusCodes.Success).send(tasks)
			} catch (e) {
				console.error(e)
				reply.status(StatusCodes.ServerError).send('Internal Error - [500]')
			}
		})
	}
}