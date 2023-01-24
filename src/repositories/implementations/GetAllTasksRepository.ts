import { TaskModel } from "../../model/Task";
import { IGetAllTaskRepository } from "../ICreateTaskRepository";

export class GetAllTasksRepository implements IGetAllTaskRepository{
    getAllTasks(): any {
        return TaskModel.find()
    }
}