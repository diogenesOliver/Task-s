import { Router } from 'express'

import { Response, Request } from 'express-serve-static-core'

import { createTaskController } from './UseCases/CreateTask/createTaskIndex'
import { taskFilterUseCase } from './UseCases/TaskFilter/taskFilterIndex'
import { getAllTasksUseCase } from './UseCases/GetAllTasks/getTaksIndex'
import { removeTaskUseCase } from './UseCases/RemoveTask/removeTaskIndex'
import { updateTaskUseCase } from './UseCases/UpdateTask/updateTaskIndex'
import { changeStatusTaskUseCase } from './UseCases/ChangeStatusTask/changeStatusIndex'
import { completedTaksUseCase } from './UseCases/CompletedTasks/completedTasksIndex'
import { incompleteTasksUseCase } from './UseCases/IncompleteTasks/incompleteTasksIndex'

import { createUserController } from './UseCases/CreateUser/userIndex'
import { authenticateUserUseCase } from './UseCases/AuthenticateUser/authUserIndex'
import { gettingAllUserUseCase } from './UseCases/GetAllUsers/allUsersIndex'

import { renderPageUseCase } from './UseCases/RenderPage/renderPageIndex'

import { taskCreateValidation } from './middlewares/taskCreateValidation'
import { userCreateValidation } from './middlewares/userCreateValidation'
import { validate } from './middlewares/handleValidation'

const router = Router()


router.get('/home', renderPageUseCase.renderHomePage)
router.post('/create', taskCreateValidation(), validate, (req: Request, res: Response) => {
    return createTaskController.handle(req, res)
})
router.get('/find-task/:difficulty', taskFilterUseCase.filterTheTasks)
router.get('/all-tasks', getAllTasksUseCase.getAllTasks)
router.delete('/remove-task/:id', removeTaskUseCase.removeTask)
router.patch('/update-task/:id', taskCreateValidation(), validate, updateTaskUseCase.updatingTask)
router.post('/auth', userCreateValidation(), validate, (req: Request, res: Response) => {
    return createUserController.handle(req, res)
})
router.get('/users', gettingAllUserUseCase.gettingAllUsers)
router.patch('/update-status/:id', changeStatusTaskUseCase.changingStatusTask)
router.get('/task-completed', completedTaksUseCase.gettingAllTasksCompleted)
router.get('/task-uncompleted', incompleteTasksUseCase.gettingAllUncompletedTasks)
router.get('/completed-tasks', renderPageUseCase.renderPageCompletedTasks)
router.get('/sign-up', renderPageUseCase.renderSignUpPage)
router.get('/login', renderPageUseCase.renderLoginPage)
router.post('/login', authenticateUserUseCase.authenticateUser)

export default router