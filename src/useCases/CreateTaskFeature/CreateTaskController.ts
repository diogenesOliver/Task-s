import { Request, Response } from 'express'
import { CreateTaskService } from '../../repositories/CreateTaskService'
import { Task } from '@prisma/client'

export class CreateTaskController {
	constructor(
        private createTaskService: CreateTaskService
	) { }

	async createTaskController(req: Request, res: Response) {
		try {
			const taskData: Task = req.body
            
            type taskDataComponents = [string, string, number]
            const taskDataArray: taskDataComponents = [taskData.title, taskData.description, taskData.difficulty]

            for(const task of taskDataArray){
            	if(task == '')
            		return res.status(404).send('ERROR')
            }

            if(taskData.difficulty <= 0 || taskData.difficulty > 9)
            	return res.status(404).send('ERROR')            

            const execCreateTask = await this.createTaskService.save(taskData)

            return res.status(200).send(execCreateTask)
		} catch (e) { console.log(e) }
	}
}