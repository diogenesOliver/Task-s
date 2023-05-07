import { IUserModel } from "../../model/User";
import { IFunctionSaveInDataBase } from '../RepositoriesGeneric'
import { PrismaClientInstance } from "../RepositoriesGeneric";

export class CreateUserRepository implements IFunctionSaveInDataBase<IUserModel>{
    async save(user: IUserModel): Promise<IUserModel> {
        return await PrismaClientInstance.user.create({
            data: user
        })
    }    
}