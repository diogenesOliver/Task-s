import { User } from "../../model/User";
import { IAuthUser } from "../ICreateUserRepository";

export class UserAuthenticationRepository implements IAuthUser{
    async findUserEmailByAuthenticaation(userEmail: string): Promise<any>{
        return await User.findOne({ email: userEmail })
    }
}