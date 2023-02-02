import { RemoveTaskController } from "./RemoveTask";
import { RemoveTaskUseCase } from "./RemoveTaskUseCase";

import { container } from "tsyringe";

const removeTaskController = new RemoveTaskController(
    container.resolve(RemoveTaskUseCase)
)

export { removeTaskController }