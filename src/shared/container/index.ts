import { container } from "tsyringe";

import { ICreateUserRepository } from "../../repositories/ICreateUserRepository";
import {
    ICreateTaskRepository,
    IGetAllTaskRepository,
    IUpdateTaskRepository 
} from '../../repositories/ICreateTaskRepository'

import { CreateUserRepository } from "../../repositories/implementations/CreateUserRepository";
import { CreateTaskRepository } from '../../repositories/implementations/CreateTasksRepository'
import { GetAllTasksRepository } from "../../repositories/implementations/GetAllTasksRepository";
import { UpdateTaskRepository } from "../../repositories/implementations/UpdateTaskRepository"

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