import 'reflect-metadata'

import fastify from 'fastify'
import fastifyExpress from '@fastify/express'
import cors from 'cors'
import websocket from '@fastify/websocket'

import { pinoHttp } from 'pino-http'
import { urlencoded } from 'body-parser'

import { getUserInstance } from './useCases/GetUsersFeature/getUsersInstance'
import { getTaskInstance } from './useCases/GetTasksFeature/getTaskInstance'
import { userLoginInstance } from './useCases/LoginUserFeature/loginUserInstance'
import { createUserInstance } from './useCases/CreateUserFeature/createUserInstance'
import { createTaskInstance } from './useCases/CreateTaskFeature/createTaskInstance'
import { deleteTaskInstance } from './useCases/DeleteTaskFeature/deleteTaskInstance'
import { createCommentInstance } from './useCases/CreateCommentFeature/CreateCommentController'
import { createRoomInstance } from './useCases/CreateRoomFeature/createRoomInstance'

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

// WebSocket Request
app.register(commentTaskPubSubInstance.taskComment)

export { app }