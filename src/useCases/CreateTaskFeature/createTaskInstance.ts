import { CreateTaskController } from './CreateTaskController'
import { CreateTaskService } from '../../repositories/CreateTaskService/CreateTaskService'

export const createTaskInstance = new CreateTaskController(
	new CreateTaskService()
)