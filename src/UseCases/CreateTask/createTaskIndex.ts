import { CreateTaskController } from "./CreateTaskController";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

import { container } from "tsyringe";

const createTaskController = new CreateTaskController(
    container.resolve(CreateTaskUseCase)
)

export { createTaskController }