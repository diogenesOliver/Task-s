import { UserEntitie } from "../../entities/User";
import { ICreateUserRepository } from "../ICreateUserRepository";
import { IUserModel, User } from "../../model/User";

export class CreateUserRepository implements ICreateUserRepository{

    async save(user: IUserModel): Promise<IUserModel> {
        await User.create(user)
        return user
    }

}