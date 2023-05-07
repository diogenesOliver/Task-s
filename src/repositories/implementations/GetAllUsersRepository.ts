import { IFuntionGetToDataBase, PrismaClientInstance } from '../RepositoriesGeneric'

export class AllUsersRepository implements IFuntionGetToDataBase<Object>{
    get(): Promise<Object> {
        return PrismaClientInstance.user.findMany()
    }
}