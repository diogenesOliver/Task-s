import { PrismaClient } from "@prisma/client"

export const PrismaClientInstance = new PrismaClient()

export interface IFunctionSaveInDataBase<T>{
    save(data: T): Promise<T>
}

export interface IFuntionGetToDataBase<T>{
    get(): Promise<T>
}

export interface IFunctionUpdate<T>{
    findId(id: T): Promise<T>
    update(newData: T, id: T): Promise<T>
}

export interface IFuntionRemove<T>{
    findId(id: T): Promise<T>
    delete(id: T): Promise<T>
}
