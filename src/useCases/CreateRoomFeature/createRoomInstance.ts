import { CreateRoomController } from './CreateRoomController'
import { CreateRoomService } from '../../repositories/CreateRoomService/CreateRoomService'

export const createRoomInstance = new CreateRoomController(
	new CreateRoomService()
)