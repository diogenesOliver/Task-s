import { CreateTaskController } from "./CreateTaskController";
import { CreateTaskUseCase } from "./CreateUserUseCase";

const createTaskUseCase = new CreateTaskUseCase()

const createTaskController = new CreateTaskController(
    createTaskUseCase
)

export { createTaskController }