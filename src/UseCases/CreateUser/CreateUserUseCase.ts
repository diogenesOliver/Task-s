import { UserEntitie } from "../../entities/User";
import { ICreateUserRepository } from "../../repositories/ICreateUserRepository";

import { inject, injectable } from "tsyringe";
import { IUserModel } from "../../model/User";

@injectable()
export class CreateUserUseCase {

    constructor(
        @inject("CreateUserRepository")
        private createUserRepository: ICreateUserRepository
    ) { }

    async execute(data: IUserModel) {
        return await this.createUserRepository.save(data)
    }
}