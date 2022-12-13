import { Router } from 'express'

import { createTaskUseCase } from './UseCases/CreateTaskUseCase/createTaskIndex'
import { taskFilterUseCase } from './UseCases/TaskFilterUseCase/taskFilterIndex'
import { getAllTasksUseCase } from './UseCases/GetAllTasksUseCase/getTaksIndex'
import { removeTaskUseCase } from './UseCases/RemoveTaskUseCase/removeTaskIndex'
import { updateTaskUseCase } from './UseCases/UpdateTaskUseCase/updateTaskIndex'
import { changeStatusTaskUseCase } from './UseCases/ChangeStatusTaskUseCase/changeStatusIndex'
import { completedTaksUseCase } from './UseCases/CompletedTasks/completedTasksIndex'
import { incompleteTasksUseCase } from './UseCases/IncompleteTasks/incompleteTasksIndex'

import { createUserUseCase } from './UseCases/CreateUserUseCase/userIndex'
import { gettingAllUserUseCase } from './UseCases/GetAllUsersUseCase/allUsersIndex'

import { renderPageUseCase } from './UseCases/RenderPageUseCase/renderPageIndex'

import { taskCreateValidation } from './middlewares/taskCreateValidation'
import { userCreateValidation } from './middlewares/userCreateValidation'
import { validate } from './middlewares/handleValidation'

const router = Router()

export default router
    .get('/home', renderPageUseCase.renderHomePage)
    .post('/create', taskCreateValidation(), validate, createTaskUseCase.createNewTask)
    .get('/find-task/:difficulty', taskFilterUseCase.filterTheTasks)
    .get('/all-tasks', getAllTasksUseCase.getAllTasks)
    .delete('/remove-task/:id', removeTaskUseCase.removeTask)
    .patch('/update-task/:id', taskCreateValidation(), validate, updateTaskUseCase.updatingTask)
    .post('/auth', userCreateValidation(), validate, createUserUseCase.createNewUser)
    .get('/users', gettingAllUserUseCase.gettingAllUsers)
    .patch('/update-status/:id', changeStatusTaskUseCase.changingStatusTask)
    .get('/task-completed', completedTaksUseCase.gettingAllTasksCompleted)
    .get('/task-uncompleted', incompleteTasksUseCase.gettingAllUncompletedTasks)
    .get('/completed-tasks', renderPageUseCase.renderPageCompletedTasks)
    .get('/sign-up', renderPageUseCase.renderSignUpPage)
    .get('/login', renderPageUseCase.renderLoginPage)