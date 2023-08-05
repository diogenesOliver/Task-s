export interface ISaveFunction<T>{
    save(data: T): Promise<T>
}

export interface IGetFunction<T>{
    get(data: T): Promise<T>
}

export interface IDeleteFunction<T>{
    delete(data: T): Promise<T>
}