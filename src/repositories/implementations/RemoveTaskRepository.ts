import { IRemoveTaskRepository } from "../ICreateTaskRepository";
import { TaskModel } from "../../model/Task";

export class RemoveTaskRepository implements IRemoveTaskRepository {

    async findTaskById(id: string): Promise<any> {
        await TaskModel.findById(id)
        return id
    }

    async deleteTask(id: string): Promise<void> {
        await TaskModel.deleteOne({ id: id })
    }

}