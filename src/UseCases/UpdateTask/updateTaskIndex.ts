import { container } from 'tsyringe'
import { UpdateTaskController } from './UpdateTask'
import { UpdateTaskUseCase } from './UpdateTaskUseCase'

const updateTaskController = new UpdateTaskController(
    container.resolve(UpdateTaskUseCase)
)

export { updateTaskController }