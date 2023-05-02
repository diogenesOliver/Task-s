import { UserEntitie } from "../../entities/User";
import { ICreateUserRepository } from "../ICreateUserRepository";
import { IUserModel, User } from "../../model/User";

import { PrismaClient } from "@prisma/client";

export class CreateUserRepository implements ICreateUserRepository<IUserModel>{
    async save(user: IUserModel): Promise<IUserModel> {
        const prismClient = new PrismaClient()
        return await prismClient.user.create({
            data: user
        })
    }    
}