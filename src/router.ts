import { Router } from 'express'

import { Response, Request } from 'express-serve-static-core'

import { createTaskController } from './UseCases/CreateTask/createTaskIndex'
import { taskFilterUseCase } from './UseCases/TaskFilter/taskFilterIndex'
import { getAllTasksUseCase } from './UseCases/GetAllTasks/getTaksIndex'
import { removeTaskController } from './UseCases/RemoveTask/removeTaskIndex'
import { updateTaskController } from './UseCases/UpdateTask/updateTaskIndex'
import { changeStatusTaskUseCase } from './UseCases/ChangeStatusTask/changeStatusIndex'
import { completedTaksUseCase } from './UseCases/CompletedTasks/completedTasksIndex'
import { incompleteTasksUseCase } from './UseCases/IncompleteTasks/incompleteTasksIndex'

import { createUserController } from './UseCases/CreateUser/userIndex'
import { userAuthenticateInstance } from './UseCases/AuthenticateUser/authUserIndex'
import { allUsersController } from './UseCases/GetAllUsers/allUsersIndex'

import { renderPageUseCase } from './UseCases/RenderPage/renderPageIndex'

import { handleValidation } from './middlewares/HandleValidation/handleValidationIndex'
import { createTaskValidate } from './middlewares/TaskValidation/taskValidationIndex'
import { createUserValidate } from './middlewares/UserValidation/userValidationIndex'
import { jsonWebTokeMiddleware } from './middlewares/JWTAuthorization/JWTHandleMiddleware'

const router = Router()

router.get('/home/:id', jsonWebTokeMiddleware.verifyJWT, renderPageUseCase.renderHomePage)
router.post('/create', createTaskValidate.dataValidations(), handleValidation.validate, (req: Request, res: Response) => {
    return createTaskController.handle(req, res)
})
router.get('/find-task/:difficulty', taskFilterUseCase.filterTheTasks)
router.get('/all-tasks', (req: Request, res: Response) => {
    return getAllTasksUseCase.getAllTasks(req, res)
})
router.delete('/remove-task/:id', (req: Request, res: Response) => {
    return removeTaskController.handle(req, res)
})
router.patch('/update-task/:id', createTaskValidate.dataValidations(), handleValidation.validate, (req: Request, res: Response) => {
    return updateTaskController.handle(req, res)
})
router.post('/auth', createUserValidate.dataValidations(), handleValidation.validate, (req: Request, res: Response) => {
    return createUserController.handle(req, res)
})
router.get('/users', (req: Request, res: Response) => {
    return allUsersController.handle(req, res)
})
router.post('/login', (req: Request, res: Response) => {
    return userAuthenticateInstance.handle(req, res)
})
router.patch('/update-status/:id', changeStatusTaskUseCase.changingStatusTask)
router.get('/task-completed', completedTaksUseCase.gettingAllTasksCompleted)
router.get('/task-uncompleted', incompleteTasksUseCase.gettingAllUncompletedTasks)
router.get('/completed-tasks', renderPageUseCase.renderPageCompletedTasks)
router.get('/sign-up', renderPageUseCase.renderSignUpPage)
router.get('/login', renderPageUseCase.renderLoginPage)
//router.post('/login', authenticateUserUseCase.authenticateUser)

export default router