import { IGetAllTaskRepository } from "../ICreateTaskRepository";

import { PrismaClient } from "@prisma/client";

export class GetAllTasksRepository implements IGetAllTaskRepository{
    getAllTasks(): Object {
        const prismaClient = new PrismaClient()
        return prismaClient.task.findMany()
    }
}