import { StatusCodes } from '../../logs/statusCode'

import { getRedis, setRedis, redisClient } from '../../redisConfig'
import { Request, Response } from 'express'
import { GetTasksService } from '../../repositories/GetTaskService/GetTasksService'

export class GetTaskController {
	constructor(
		private getTaskService: GetTasksService
	) { }

	async getTaskController(req: Request, res: Response) {
		try {
			const tasksFromCache = await getRedis('tasks')
			if (tasksFromCache) {
				res.send(JSON.parse(tasksFromCache))
				return redisClient.del('tasks', (err) => {
					if(err) throw Error()
				})
			}

			const tasks = await this.getTaskService.returninAll()
			await setRedis('tasks', JSON.stringify(tasks))

			return res.status(StatusCodes.Success).send(tasks)
		} catch (e) {
			console.error(e)
			res.status(StatusCodes.ServerError).send('Internal Error - [500]')
		}
	}
}