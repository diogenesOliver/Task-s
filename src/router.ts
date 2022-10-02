import { Router, Request, Response } from 'express'
import { createTask } from './controllers/linkController'
import { taskCreateValidation } from './middlewares/taskCreateValidation'

import { validate } from './middlewares/handleValidation'

const router = Router()

export default router.post('/teste', taskCreateValidation(), validate, createTask)