export interface IFunctionSaveInDataBase<T>{
    save(data: T): Promise<T>
}

export interface IFuntionGetToDataBase<T>{
    get(data: T): Promise<T>
}

export interface IFunctionUpdate<T>{
    findId(id: T): Promise<T>
    update(newData: T): Promise<T>
}

export interface IFuntionRemove<T>{
    findId(id: T): Promise<T>
    delete(id: T): Promise<T>
}