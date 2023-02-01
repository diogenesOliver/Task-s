import { TaskEntitie } from '../entities/Tasks'

export interface ICreateTaskRepository{
    save(task: TaskEntitie): TaskEntitie
}

export interface IGetAllTaskRepository{
    getAllTasks(): any
}

export interface IUpdateTaskRepository{
    findTaskById(id: string): any
    updateTask(id: string, data: Object): any
}