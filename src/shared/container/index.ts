import { container } from "tsyringe";

import { CreateUserRepository } from "../../repositories/implementations/CreateUserRepository";
import { ICreateUserRepository } from "../../repositories/ICreateUserRepository";

container.registerSingleton<ICreateUserRepository>(
    "CreateUserRepository",
    CreateUserRepository
)