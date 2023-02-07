import { UserModel } from "../../model/User";
import { IAuthUser } from "../ICreateUserRepository";

export class UserAuthenticationRepository implements IAuthUser{
    findUserEmailByAuthenticaation(userEmail: string): any {
        UserModel.find({ email: userEmail })
        return userEmail
    }
}