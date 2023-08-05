import { IRemoveTaskRepository } from "../ICreateTaskRepository";
import { TaskModel } from "../../model/Task";

import { IFuntionRemove, PrismaClientInstance } from '../RepositoriesGeneric'

export class RemoveTaskRepository implements IFuntionRemove<number> {

    async findId(id: number): Promise<number> {
        await PrismaClientInstance.task.findUnique({
            where: {
                id: id
            }
        })
        return id
    }

    async delete(id: number): Promise<number> {
        await PrismaClientInstance.task.delete({
            where: {
                id: id
            }
        })
        return id
    }
}