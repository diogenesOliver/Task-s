import { DeleteTaskController } from './DeleteTaskController'
import { DeleteTaskService } from '../../repositories/DeleteTaskService/DeletTaskRepository'

export const deleteTaskInstance = new DeleteTaskController(
	new DeleteTaskService()
)