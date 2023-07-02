import { CreateUserController } from "./CreateUserController";
import { CreateUserService } from "../repositories/CreateUserService";

export const createUserInstance = new CreateUserController(
    new CreateUserService()
)