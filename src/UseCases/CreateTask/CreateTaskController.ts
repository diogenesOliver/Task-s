import { Response, Request } from "express"
import { CreateTaskUseCase } from "./CreateTaskUseCase"

export class CreateTaskController{

    constructor(
        private createTaskUseCase: CreateTaskUseCase
    ){}

    async handle(req: Request, res: Response){
        const tasksData = req.body
        await this.createTaskUseCase.execute(tasksData)
    }

}