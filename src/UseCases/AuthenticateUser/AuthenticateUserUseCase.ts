import { inject, injectable } from "tsyringe";
import { IAuthUser } from "../../repositories/ICreateUserRepository";

@injectable()
export class UserAuthenticationUseCase {

    constructor(
        @inject("UserAuthenticationRepository")
        private userAuthUseCase: IAuthUser
    ) { }

    async execute(userEmail: string) {
        return await this.userAuthUseCase.findUserEmailByAuthenticaation(userEmail)
    }

} 