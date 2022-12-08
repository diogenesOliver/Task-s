import { Router, Request, Response } from 'express'
import {

    createTask,
    filteringTask,
    getAllTasks,
    removeTask,
    updateTask,
    renderHomePage,
    changingCardStatus,
    gettingAllTasksCompleted,
    gettingAllUncompletedTasks,
    renderPageCompletedTasks

 } from './controllers/linkController'

import {

    /* creatingANewUser, */
    /* getAllUsers, */
    athenticateUser,
    renderSignUpPage,
    renderLoginPage

} from './controllers/authController'

import { createUserUseCase } from './controllers/CreateUserUseCase/userIndex'
import { gettingAllUserUseCase } from './controllers/GetAllUsersUseCase/allUsersIndex'

import { taskCreateValidation } from './middlewares/taskCreateValidation'
import {  userCreateValidation } from './middlewares/userCreateValidation'
import { validate } from './middlewares/handleValidation'

const router = Router()

export default router
    .get('/home', renderHomePage)
    .post('/create', taskCreateValidation(), validate, createTask)
    .get('/find-task/:difficulty', filteringTask)
    .get('/all-tasks', getAllTasks)
    .delete('/remove-task/:id', removeTask)
    .patch('/update-task/:id', taskCreateValidation(), validate, updateTask)
    .get('/find-task/:title')
    .post('/auth', userCreateValidation(), validate, createUserUseCase.createNewUser)
    .get('/users', gettingAllUserUseCase.gettingAllUsers)
    .patch('/update-status/:id', changingCardStatus)
    .get('/task-completed', gettingAllTasksCompleted)
    .get('/task-uncompleted', gettingAllUncompletedTasks)
    .get('/completed-tasks', renderPageCompletedTasks)
    .get('/sign-up', renderSignUpPage)
    .get('/login', renderLoginPage)