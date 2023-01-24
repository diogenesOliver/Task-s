import { container } from "tsyringe";

import { GetAllTasksRepository } from "../../repositories/implementations/GetAllTasksRepository";
import { GetAllTasks } from "./GetAllTasks";

const getAllTasksUseCase = new GetAllTasks(
    container.resolve(GetAllTasksRepository)
)

export { getAllTasksUseCase }