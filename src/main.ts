import 'reflect-metadata'

import fastify from 'fastify'
import fastifyExpress from '@fastify/express'
import cors from 'cors'
import websocket from '@fastify/websocket'

import { pinoHttp } from 'pino-http'
import { urlencoded } from 'body-parser'

import { getUserInstance } from './useCases/GetUsersFeature/GetUsersController'
import { getTaskInstance } from './useCases/GetTasksFeature/GetTasksController'
import { userLoginInstance } from './useCases/LoginUserFeature/LoginUserController'
import { createUserInstance } from './useCases/CreateUserFeature/CreateUserController'
import { createTaskInstance } from './useCases/CreateTaskFeature/CreateTaskController'
import { deleteTaskInstance } from './useCases/DeleteTaskFeature/DeleteTaskController'
import { createCommentInstance } from './useCases/CreateCommentFeature/CreateCommentController'
import { createRoomInstance } from './useCases/CreateRoomFeature/CreateRoomController'
import { getRoomsInstance } from './useCases/GetRoomsFeature/GetRoomController'

import { commentTaskPubSubInstance } from './useCases/ws/comments-ws'

const app = fastify()

app.register(websocket)
app.register(fastifyExpress)
	.after(() => {
		app.use(urlencoded({ extended: true }))
		app.use(cors())

		app.use(pinoHttp({
			transport: {
				target: 'pino-pretty',
				options: {
					colorize: true
				}
			}
		}))
	})


// HTTP Request
app.register(getUserInstance.getUserController)
app.register(getTaskInstance.getTaskController)
app.register(userLoginInstance.verifyEmailInDatabase)
app.register(createUserInstance.createUserController)
app.register(createTaskInstance.createTaskController)
app.register(deleteTaskInstance.deleteTaskController)
app.register(createCommentInstance.createCommentController)
app.register(createRoomInstance.createRoomController)
app.register(getRoomsInstance.getRoomController)


// WebSocket Request
app.register(commentTaskPubSubInstance.taskComment)

export { app }