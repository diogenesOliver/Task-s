import { Request, Response } from "express";
import { CreateTaskService } from "../repositories/CreateTaskService"
import { Task } from "@prisma/client";

export class CreateTaskController {
    constructor(
        private createTaskService: CreateTaskService
    ) { }

    async createTaskController(req: Request, res: Response) {
        try {
            const taskData: Task = req.body
            this.createTaskService.save(taskData)

            res.status(200).send('Success to create task')
        } catch (e) { console.log(e) }
    }
}