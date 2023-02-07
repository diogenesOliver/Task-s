import { UserEntitie } from '../entities/User'

export interface ICreateUserRepository{
    save(user: UserEntitie): UserEntitie
}

export interface IGetAllUsersRepository{
    getAllUsers(): any
}

export interface IAuthUser{
    findUserEmailByAuthenticaation(userEmail: string): any
}