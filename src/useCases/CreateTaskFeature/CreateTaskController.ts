import { Request, Response } from 'express'
import { Task } from '@prisma/client'

import { CreateTaskService } from '../../repositories/CreateTaskService/CreateTaskService'
import { countOfDaysToCompleteATask } from './countDayTaskDay'

export class CreateTaskController {
	constructor(
		private createTaskService: CreateTaskService
	) { }

	private verifyingEmptyInputs(inputs: Array<any>, res?: Response) {
		for (const input of inputs) {
			if (!input)
				return res?.status(404).send({  messgae: 'Invalid input, data not provide.' })
		}

		return inputs
	}

	private async setEndsDate(endsDate: string | null): Promise<Date | null> {
		if (!endsDate)
			return null

		const newDate: string = new Date().toISOString().split('T')[0]
		if (endsDate < newDate)
			throw new Error('Invalid value from ends date, try again.')

		return new Date(endsDate)
	}

	async createTaskController(req: Request, res: Response) {
		try {
			const taskData: Task = req.body
			const taskDataArray = [taskData.title, taskData.description, taskData.difficulty]

			this.verifyingEmptyInputs(taskDataArray)
			this.setEndsDate(taskData.endsDate)

			await countOfDaysToCompleteATask(
				taskData.endsDate
			)

			if (!(taskData.difficulty > 0 && taskData.difficulty <= 9))
				return res.status(404).send('Invalid value from difficulty level.')

			await this.createTaskService.save(taskData)
			return res.status(201).send({
				message: 'Task created successfully'
			})
		} catch (e) {
			console.error(e)
			res.status(500).send('Internal Error - [500]')
		}
	}
}