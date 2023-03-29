import { container } from "tsyringe";

import { AuthenticateUser } from "./AuthenticateUser";
import { UserAuthenticationUseCase } from "./AuthenticateUserUseCase";

const userAuthenticateInstance = new AuthenticateUser(
    container.resolve(UserAuthenticationUseCase)
)

export { userAuthenticateInstance }