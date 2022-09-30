import { Router, Request, Response } from 'express'
import { returningScreen } from './controllers/linkController'

const router = Router()

export default router.get('/teste', returningScreen)