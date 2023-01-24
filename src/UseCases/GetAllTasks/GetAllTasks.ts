import { Response, Request } from "express"
import { GetAllTasksRepository } from "../../repositories/implementations/GetAllTasksRepository"

export class GetAllTasks{

    constructor(
        private allTasks: GetAllTasksRepository
    ){}
    
    async getAllTasks(req: Request, res: Response){

        const tasks = await this.allTasks.getAllTasks()
        res.status(200).json(tasks)

    }

}