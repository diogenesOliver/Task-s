import { GetUserController } from './GetUsersController'
import { GetUserService } from '../../repositories/GetUserService/GetUsersService'

export const getUserInstance = new GetUserController(
	new GetUserService()
)