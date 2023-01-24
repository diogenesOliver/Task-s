import { container } from "tsyringe";

import { CreateUserRepository } from "../../repositories/implementations/CreateUserRepository";
import { ICreateUserRepository } from "../../repositories/ICreateUserRepository";

import { CreateTaskRepository } from '../../repositories/implementations/CreateTasksRepository'
import { ICreateTaskRepository, IGetAllTaskRepository } from '../../repositories/ICreateTaskRepository'
import { GetAllTasksRepository } from "../../repositories/implementations/GetAllTasksRepository";

container.registerSingleton<ICreateUserRepository>(
    "CreateUserRepository",
    CreateUserRepository
)

container.registerSingleton<ICreateTaskRepository>(
    "CreateTaskRepository",
    CreateTaskRepository
)

container.registerSingleton<IGetAllTaskRepository>(
    "AllTasksRepository",
    GetAllTasksRepository
)