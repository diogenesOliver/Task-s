import { IUpdateTaskRepository } from "../ICreateTaskRepository";
import { TaskModel } from "../../model/Task";

export class UpdateTaskRepository implements IUpdateTaskRepository {

    async findTaskById(id: string): Promise<any> {
        await TaskModel.findById(id)
        return id
    }

    async updateTask(id: string, data: Object): Promise<any> {
        await TaskModel.updateOne({ id: id }, data)
    }

}
