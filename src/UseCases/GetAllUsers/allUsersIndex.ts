import { container } from "tsyringe";

import { AllUsersController } from "./AllUsers";
import { GetAllUsersUseCase } from "./AllUsersUseCase";

const allUsersController = new AllUsersController(
    container.resolve(GetAllUsersUseCase)
)

export { allUsersController }