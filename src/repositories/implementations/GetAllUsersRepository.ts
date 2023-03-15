import { User } from "../../model/User";
import { IGetAllUsersRepository } from "../ICreateUserRepository";

export class AllUsersRepository implements IGetAllUsersRepository{
    getAllUsers(): any {
        return User.find()
    }
}