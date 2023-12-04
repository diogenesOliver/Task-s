import { Request, Response } from 'express'
import { GetTasksService } from '../../repositories/GetTaskService/GetTasksService'

export class GetTaskController {
	constructor(
		private getTaskService: GetTasksService
	) { }

	async getTaskController(req: Request, res: Response) {
		try {
			return res.status(200).send(
				await this.getTaskService.returninAll()
			)
		} catch (e) { console.log(e) }
	}
}