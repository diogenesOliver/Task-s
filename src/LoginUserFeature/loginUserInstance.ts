import { UserLoginController } from "./LoginUserController";
import { UserLoginService } from "../repositories/LoginUserService";

export const userLoginInstance = new UserLoginController(
    new UserLoginService
)