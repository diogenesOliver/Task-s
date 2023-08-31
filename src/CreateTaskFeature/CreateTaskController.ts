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
            const execCreateTask = await this.createTaskService.save(taskData)

            return res.status(200).send(execCreateTask)
        } catch (e) { console.log(e) }
    }
}