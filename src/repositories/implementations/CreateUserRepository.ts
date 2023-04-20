import { UserEntitie } from "../../entities/User";
import { ICreateUserRepository } from "../ICreateUserRepository";
import { IUserModel, User } from "../../model/User";

import { PrismaClient } from "@prisma/client";

export class CreateUserRepository implements ICreateUserRepository{
    async save(user: any): Promise<IUserModel> {
        const prismClient = new PrismaClient()
        return await prismClient.user.create({
            data: user
        })
    }    
}