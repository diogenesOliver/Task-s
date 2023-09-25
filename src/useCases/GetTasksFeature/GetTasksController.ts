import { Request, Response } from 'express'
import { GetTasksService } from '../../repositories/GetTasksService'

export class GetTaskController {
	constructor(
		private getTaskService: GetTasksService
	) { }

	async getTaskController(req: Request, res: Response) {
		try {
			const task = await this.getTaskService.returninAll()
			return res.status(200).send(task)
		} catch (e) { console.log(e) }
	}
}