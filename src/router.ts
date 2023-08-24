import { Router } from 'express'

import { Response, Request } from 'express-serve-static-core'

const router = Router()

import { createUserInstance } from "./CreateUserFeature/createUserInstance"
import { createTaskInstance } from "./CreateTaskFeature/createTaskInstance"
import { getUserInstance } from "./GetUsersFeature/getUsersInstance"
import { userLoginInstance } from './LoginUserFeature/loginUserInstance'

router.get('/all/users/:id', (req: Request, res: Response) => {
    return getUserInstance.getUserController(req, res)
})

router.post('/register', (req: Request, res: Response) => {
    return createUserInstance.createUserController(req, res)
})

router.post('/create/task', (req: Request, res: Response) => {
    return createTaskInstance.createTaskController(req, res)
})

router.post('/user/sign-up', (req: Request, res: Response) => {
    return userLoginInstance.virifyEmailInDatabase(req, res)
})

export default router