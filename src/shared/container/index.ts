import { container } from "tsyringe";

import { ICreateUserRepository, IGetAllUsersRepository } from "../../repositories/ICreateUserRepository";
import {
    ICreateTaskRepository,
    IGetAllTaskRepository,
    IRemoveTaskRepository,
    IUpdateTaskRepository 
} from '../../repositories/ICreateTaskRepository'

import { CreateUserRepository } from "../../repositories/implementations/CreateUserRepository";
import { CreateTaskRepository } from '../../repositories/implementations/CreateTasksRepository'
import { GetAllTasksRepository } from "../../repositories/implementations/GetAllTasksRepository";
import { UpdateTaskRepository } from "../../repositories/implementations/UpdateTaskRepository"
import { RemoveTaskRepository } from "../../repositories/implementations/RemoveTaskRepository";
import { AllUsersRepository } from '../../repositories/implementations/GetAllUsersRepository'

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

container.registerSingleton<IUpdateTaskRepository>(
    "UpdateTaskRepository",
    UpdateTaskRepository
)

container.registerSingleton<IRemoveTaskRepository>(
    "RemoveTaskRespository",
    RemoveTaskRepository
)

container.registerSingleton<IGetAllUsersRepository>(
    "AllUsersRepository",
    AllUsersRepository
)