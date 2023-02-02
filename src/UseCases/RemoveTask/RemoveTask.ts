import { Response, Request } from "express"
import { RemoveTaskUseCase } from "./RemoveTaskUseCase"

export class RemoveTaskController{

    constructor(
        private removeTaskController: RemoveTaskUseCase
    ){}

    async handle(req: Request, res: Response){
        
        const id = req.params.id
        const task = await this.removeTaskController.executeFindByID(id)

        if(!task)
            res.status(404).json({ message: 'This task not exist' })

        this.removeTaskController.executeRemoveTask(task)

        res.status(200).json({ message: 'Success to remove task' })
    }

}