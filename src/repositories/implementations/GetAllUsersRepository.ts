import { UserModel } from "../../model/User";
import { IGetAllUsersRepository } from "../ICreateUserRepository";

export class AllUsersRepository implements IGetAllUsersRepository{
    getAllUsers(): any {
        return UserModel.find()
    }
}