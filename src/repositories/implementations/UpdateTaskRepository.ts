import { IUpdateTaskRepository } from "../ICreateTaskRepository";
import { TaskModel } from "../../model/Task";

import { IFunctionUpdate, PrismaClientInstance } from '../RepositoriesGeneric'

export class UpdateTaskRepository implements IFunctionUpdate<any> {

    async findId(id: number): Promise<number> {
        await PrismaClientInstance.task.findUnique({
            where: {
                id: id
            }
        })
        return id
    }
    
    async update(newData: any, id: number): Promise<boolean> {
        await PrismaClientInstance.task.update({
            where: { id: id },
            data: {
                title: newData,
                status: newData,
                difficulty: newData,
                description: newData
            }
        })
        return true
    }

    async findTaskById(id: string): Promise<any> {
        await TaskModel.findById(id)
        return id
    }

    async updateTask(id: string, data: Object): Promise<any> {
        await TaskModel.updateOne({ id: id }, data)
    }

}
