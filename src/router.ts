import { Router, Request, Response } from 'express'
import { createTask, filteringTask, getAllTasks } from './controllers/linkController'
import { taskCreateValidation } from './middlewares/taskCreateValidation'

import { validate } from './middlewares/handleValidation'

const router = Router()

export default router.post('/create', taskCreateValidation(), validate, createTask)
    .get('/find-task/:difficulty', filteringTask)
    .get('/all-tasks', getAllTasks)