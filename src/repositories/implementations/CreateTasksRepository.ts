import { TaskEntitie } from "../../entities/Tasks";
import { ICreateTaskRepository, IGetAllTaskRepository } from "../ICreateTaskRepository";
import { TaskModel } from "../../model/Task";

export class CreateTaskRepository implements ICreateTaskRepository{
    save(task: TaskEntitie): TaskEntitie {
        TaskModel.create(task)
        return task
    }
}