import { Router } from 'express'
import { Response, Request } from 'express-serve-static-core'

const router = Router()

import { getUserInstance } from './useCases/GetUsersFeature/getUsersInstance'
import { createUserInstance } from './useCases/CreateUserFeature/createUserInstance'
import { createTaskInstance } from './useCases/CreateTaskFeature/createTaskInstance'
import { userLoginInstance } from './useCases/LoginUserFeature/loginUserInstance'
import { getTaskInstance } from './useCases/GetTasksFeature/getTaskInstance'

const urlArrays: string[] = ['/all/users/:id', '/register', '/create/task', '/user/sign-up', '/all/tasks']

router.get(urlArrays[0], (req: Request, res: Response) => {
	return getUserInstance.getUserController(req, res)
})

router.post(urlArrays[1], (req: Request, res: Response) => {
	return createUserInstance.createUserController(req, res)
})

router.post(urlArrays[2], (req: Request, res: Response) => {
	return createTaskInstance.createTaskController(req, res)
})

router.post(urlArrays[3], (req: Request, res: Response) => {
	return userLoginInstance.virifyEmailInDatabase(req, res)
})

router.get(urlArrays[4], (req: Request, res: Response) => {
	return getTaskInstance.getTaskController(req, res)
})

export default router