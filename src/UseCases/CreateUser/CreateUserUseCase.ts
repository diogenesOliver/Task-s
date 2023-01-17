import { UserEntitie } from "../../entities/User";
import { ICreateUserRepository } from "../../repositories/ICreateUserRepository";

import { inject, injectable } from "tsyringe";

@injectable()
export class CreateUserUseCase {

    constructor(
        @inject("CreateUserRepository")
        private createUserRepository: ICreateUserRepository
    ) { }

    async execute(data: UserEntitie) {
        this.createUserRepository.save(data)
    }
}