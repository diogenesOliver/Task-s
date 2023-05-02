import { IGetAllTaskRepository } from "../ICreateTaskRepository";
import { IFuntionGetToDataBase } from '../RepositoriesGeneric'

import { PrismaClient } from "@prisma/client";

export class GetAllTasksRepository implements IFuntionGetToDataBase<Object>{
    get(): Promise<Object> {
        const prismaClient = new PrismaClient()
        return prismaClient.task.findMany()
    }
}