import { inject, injectable } from "tsyringe";
import { IGetAllUsersRepository } from "../../repositories/ICreateUserRepository";

@injectable()
export class GetAllUsersUseCase{

    constructor(
        @inject("AllUsersRepository")
        private allUsersUseCase: IGetAllUsersRepository
    ){}

    async execute(){
        return await this.allUsersUseCase.getAllUsers()
    }

}