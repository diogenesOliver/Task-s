import { GetUserController } from "./GetUsersController";
import { GetUserService } from "../repositories/GetUsersService";

export const getUserInstance = new GetUserController(
    new GetUserService()
)