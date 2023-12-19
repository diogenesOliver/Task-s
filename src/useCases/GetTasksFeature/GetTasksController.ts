import { getRedis, setRedis } from '../../redisConfig'
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
				return res.send(JSON.parse(tasksFromCache))
			}

			const tasks = await this.getTaskService.returninAll()
			await setRedis('tasks', JSON.stringify(tasks))

			return res.status(200).send(tasks)
		} catch (e) { console.log(e) }
	}
}