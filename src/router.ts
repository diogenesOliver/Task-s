import { Router } from 'express'

import { createTaskUseCase }        from './UseCases/CreateTask/createTaskIndex'
import { taskFilterUseCase }        from './UseCases/TaskFilter/taskFilterIndex'
import { getAllTasksUseCase }       from './UseCases/GetAllTasks/getTaksIndex'
import { removeTaskUseCase }        from './UseCases/RemoveTask/removeTaskIndex'
import { updateTaskUseCase }        from './UseCases/UpdateTask/updateTaskIndex'
import { changeStatusTaskUseCase }  from './UseCases/ChangeStatusTask/changeStatusIndex'
import { completedTaksUseCase }     from './UseCases/CompletedTasks/completedTasksIndex'
import { incompleteTasksUseCase }   from './UseCases/IncompleteTasks/incompleteTasksIndex'

import { createUserUseCase }        from './UseCases/CreateUser/userIndex'
import { authenticateUserUseCase }  from './UseCases/AuthenticateUser/authUserIndex'
import { gettingAllUserUseCase }    from './UseCases/GetAllUsers/allUsersIndex'

import { renderPageUseCase }        from './UseCases/RenderPage/renderPageIndex'

import { taskCreateValidation }     from './middlewares/taskCreateValidation'
import { userCreateValidation }     from './middlewares/userCreateValidation'
import { validate }                 from './middlewares/handleValidation'

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
    .post('/login', authenticateUserUseCase.authenticateUser)