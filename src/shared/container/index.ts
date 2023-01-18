import { container } from "tsyringe";

import { CreateUserRepository } from "../../repositories/implementations/CreateUserRepository";
import { ICreateUserRepository } from "../../repositories/ICreateUserRepository";

import { CreateTaskRepository } from '../../repositories/implementations/CreateTasksRepository'
import { ICreateTaskRepository } from '../../repositories/ICreateTaskRepository'

container.registerSingleton<ICreateUserRepository>(
    "CreateUserRepository",
    CreateUserRepository
)

container.registerSingleton<ICreateTaskRepository>(
    "CreateTaskRepository",
    CreateTaskRepository
)