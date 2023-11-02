import { Router } from 'express'
import { Response, Request } from 'express-serve-static-core'

import { ensureAuthenticated } from './middlewares/ensureAuthenticated'

const router = Router()

import { getUserInstance } from './useCases/GetUsersFeature/getUsersInstance'
import { createUserInstance } from './useCases/CreateUserFeature/createUserInstance'
import { createTaskInstance } from './useCases/CreateTaskFeature/createTaskInstance'
import { userLoginInstance } from './useCases/LoginUserFeature/loginUserInstance'
import { getTaskInstance } from './useCases/GetTasksFeature/getTaskInstance'

router.get('/all/users/:id', (req: Request, res: Response) => {
	return getUserInstance.getUserController(req, res)
})

router.post('/register', (req: Request, res: Response) => {
	return createUserInstance.createUserController(req, res)
})

router.post('/create/task', (req: Request, res: Response) => {
	return createTaskInstance.createTaskController(req, res)
})

router.post('/user/sign-up', ensureAuthenticated, (req: Request, res: Response) => {
	return userLoginInstance.verifyEmailInDatabase(req, res)
})

router.get('/all/tasks', (req: Request, res: Response) => {
	return getTaskInstance.getTaskController(req, res)
})

export default router