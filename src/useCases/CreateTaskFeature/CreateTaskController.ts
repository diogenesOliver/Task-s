import { Request, Response } from 'express'
import { CreateTaskService } from '../../repositories/CreateTaskService'
import { Task } from '@prisma/client'

export class CreateTaskController {
	constructor(
		private createTaskService: CreateTaskService
	) { }

	private verifyingEmptyInputs(inputs: Array<any>, res?: Response){
		for(const input of inputs){
			if(input == '')
				return res?.status(404).send('ERROR')
		}

		return inputs
	}

	async createTaskController(req: Request, res: Response) {
		try {
			const taskData: Task = req.body
			const taskDataArray = [taskData.title, taskData.description, taskData.difficulty]

			this.verifyingEmptyInputs(taskDataArray)

			if (taskData.difficulty <= 0 || taskData.difficulty > 9)
				return res.status(404).send('ERROR')

			const execCreateTask = await this.createTaskService.save(taskData)

			return res.status(200).send(execCreateTask)
		} catch (e) { console.log(e) }
	}
}