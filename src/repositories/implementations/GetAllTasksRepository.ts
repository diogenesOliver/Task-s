import { IFuntionGetToDataBase, PrismaClientInstance } from '../RepositoriesGeneric'

export class GetAllTasksRepository implements IFuntionGetToDataBase<Object>{
    get(): Promise<Object> {
        return PrismaClientInstance.task.findMany()
    }
}