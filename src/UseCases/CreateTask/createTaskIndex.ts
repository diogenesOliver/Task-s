import { CreateTaskController } from "./CreateTaskController";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

const createTaskUseCase = new CreateTaskUseCase()

const createTaskController = new CreateTaskController(
    createTaskUseCase
)

export { createTaskController }