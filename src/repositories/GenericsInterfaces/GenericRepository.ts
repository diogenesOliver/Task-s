import { PrismaClient } from '@prisma/client'

export const PrismaClientInstance = new PrismaClient()

export interface ISaveFunctionGeneric<T>{
    save(data: T): Promise<T>
}

export interface IGetFunctionGeneric<T>{
    get(params: T): Promise<T>
}

export interface IFindData<T>{
    findData(data: T): Promise<T>
}

export interface IGetAll<T>{
    returninAll(): Promise<T>
}

export interface IDeleteTask<T>{
    inputsFromDeleteATask(authorId: number, taskId: number): Promise<T>
}