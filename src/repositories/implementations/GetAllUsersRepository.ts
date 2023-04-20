import { IGetAllUsersRepository } from "../ICreateUserRepository";
import { PrismaClient } from "@prisma/client";

export class AllUsersRepository implements IGetAllUsersRepository{
    getAllUsers(): Object{
        const prismaClient = new PrismaClient()
        return prismaClient.user.findMany()
    }
}