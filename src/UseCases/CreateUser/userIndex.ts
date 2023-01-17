import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

import { container } from "tsyringe";

const createUserController = new CreateUserController(
    container.resolve(CreateUserUseCase)
)

export { createUserController }