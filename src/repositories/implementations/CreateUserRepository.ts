import { UserEntitie } from "../../entities/User";
import { ICreateUserRepository } from "../ICreateUserRepository";
import { IUserModel, User } from "../../model/User";

import { IFunctionSaveInDataBase } from '../RepositoriesGeneric'
import { PrimsClientInstance } from "../RepositoriesGeneric";

import { PrismaClient } from "@prisma/client";

export class CreateUserRepository implements IFunctionSaveInDataBase<IUserModel>{
    async save(user: IUserModel): Promise<IUserModel> {
        return await PrimsClientInstance.user.create({
            data: user
        })
    }    
}