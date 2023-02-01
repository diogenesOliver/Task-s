import { Response, Request } from 'express'
import { UpdateTaskUseCase } from './UpdateTaskUseCase'

export class UpdateTaskController {

    constructor(
        private updateTaskController: UpdateTaskUseCase
    ) { }

    async handle(req: Request, res: Response) {

        const id = req.params.id
        const taskData = req.body

        const task = await this.updateTaskController.executeFindByID(id)
        console.log(task)

        if (!task){
            res.status(404).json({ error: 'This task not exist' })
        }

        await this.updateTaskController.executeUpdateTask(id, taskData)

        res.status(200).send(taskData)

    }

}