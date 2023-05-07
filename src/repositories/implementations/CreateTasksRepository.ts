import { TaskEntitie } from "../../entities/Tasks";
import { ICreateTaskRepository, IGetAllTaskRepository } from "../ICreateTaskRepository";
import { ITaskModel } from "../../model/Task";

import { IFunctionSaveInDataBase } from '../RepositoriesGeneric'
import { PrismaClientInstance } from "../RepositoriesGeneric";

export class CreateTaskRepository implements IFunctionSaveInDataBase<ITaskModel>{
    async save(data: any): Promise<ITaskModel> {
        return await PrismaClientInstance.task.create({
            data: data
        })
    }
}