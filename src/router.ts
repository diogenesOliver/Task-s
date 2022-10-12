import { Router, Request, Response } from 'express'
import { createTask, filteringTask, getAllTasks, removeTask, updateTask } from './controllers/linkController'
import { taskCreateValidation } from './middlewares/taskCreateValidation'

import { validate } from './middlewares/handleValidation'

const router = Router()

export default router.post('/create', taskCreateValidation(), validate, createTask)
    .get('/find-task/:difficulty', filteringTask)
    .get('/all-tasks', getAllTasks)
    .delete('/remove-task/:id', removeTask)
    .patch('/update-task/:id', taskCreateValidation(), validate, updateTask)
    .get('/find-task/:title')
    .get('/home', (req: Request, res: Response) => {
        res.render('index.ejs')
    })