import { User } from "@prisma/client";
import { IGetFunctionGeneric, PrismaClientInstance } from "./GenericsInterfaces/GenericRepository"

export class GetUserService implements IGetFunctionGeneric<User[]>{
    async get(): Promise<User[]> {
        const users: User[] = await PrismaClientInstance.user.findMany({
            include:{
                Task: true
            }
        })
    
        return users
    }
}