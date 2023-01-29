import { TaskEntitie } from '../entities/Tasks'

export interface ICreateTaskRepository{
    save(task: TaskEntitie): TaskEntitie
}

export interface IGetAllTaskRepository{
    getAllTasks(): any
}

export interface IUpdateTaskRepository{
    findTaskById(id: string): string
    updateTask(id: string, data: string): string
}