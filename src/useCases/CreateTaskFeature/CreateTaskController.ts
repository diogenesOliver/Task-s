import { Request, Response } from 'express'
import { CreateTaskService } from '../../repositories/CreateTaskService'
import { Task } from '@prisma/client'

export class CreateTaskController {
	constructor(
		private createTaskService: CreateTaskService
	) { }

	private verifyingEmptyInputs(inputs: Array<any>, res?: Response) {
		for (const input of inputs) {
			if (input == '')
				return res?.status(404).send('ERROR')
		}

		return inputs
	}

	private setEndsDate(endsDate: string | null) {
		const newDate = new Date().toISOString().split('T')[0]

		if (endsDate == null) return null
		if (endsDate == '')
			return new Date(endsDate)

		if (endsDate < newDate)
			throw new Error('ERROR')
	}

	async createTaskController(req: Request, res: Response) {
		try {
			const taskData: Task = req.body
			const taskDataArray = [taskData.title, taskData.description, taskData.difficulty]

			this.verifyingEmptyInputs(taskDataArray)
			this.setEndsDate(taskData.endsDate)

			if (taskData.difficulty <= 0 || taskData.difficulty > 9)
				return res.status(404).send('ERROR')

			const execCreateTask = await this.createTaskService.save(taskData)

			return res.status(200).send(execCreateTask)
		} catch (e) { console.log(e) }
	}
}