import { container } from "tsyringe";

import { ICreateUserRepository, IGetAllUsersRepository, IAuthUser } from "../../repositories/ICreateUserRepository";
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
import { UserAuthenticationRepository } from '../../repositories/implementations/UserAuthenticationRepository'

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

container.registerSingleton<IAuthUser>(
    "UserAuthenticationRepository",
    UserAuthenticationRepository
)