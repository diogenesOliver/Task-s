import { GetTaskController } from './GetTasksController'
import { GetTasksService } from '../../repositories/GetTaskService/GetTasksService'

export const getTaskInstance = new GetTaskController(
	new GetTasksService()
)