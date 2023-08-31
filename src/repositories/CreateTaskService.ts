import { Task } from "@prisma/client"
import { ISaveFunctionGeneric, PrismaClientInstance } from "./GenericsInterfaces/GenericRepository"

export class CreateTaskService implements ISaveFunctionGeneric<Task>{
    async save(data: Task): Promise<Task> {
        await PrismaClientInstance.task.create({
            data: data
        })

        return await PrismaClientInstance.task.findUnique({
            where: {
                title: data.title
            }
        }) as Task
    }
}