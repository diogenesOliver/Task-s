import { TaskEntitie } from '../entities/Tasks'

export interface ICreateTaskRepository{
    save(task: TaskEntitie): TaskEntitie
}

export interface IGetAllTaskRepository{
    getAllTasks(): any
}
