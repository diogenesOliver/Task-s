import { UserEntitie } from '../entities/User'
import { IUserModel } from '../model/User'

export interface ICreateUserRepository{
    save(user: IUserModel): Promise<IUserModel>
}

export interface IGetAllUsersRepository{
    getAllUsers(): any
}

export interface IAuthUser{
    findUserEmailByAuthenticaation(userEmail: string): Promise<IUserModel>
}