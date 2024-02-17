import 'reflect-metadata'

import fastify from 'fastify'
import fastifyExpress from '@fastify/express'

import express from 'express'
import cors from 'cors'

import { pinoHttp } from 'pino-http'
import { urlencoded } from 'body-parser'

import { getUserInstance } from './useCases/GetUsersFeature/getUsersInstance'
import { getTaskInstance } from './useCases/GetTasksFeature/getTaskInstance'
import { userLoginInstance } from './useCases/LoginUserFeature/loginUserInstance'

const app = fastify()

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

app.register(getUserInstance.getUserController)
app.register(getTaskInstance.getTaskController)
app.register(userLoginInstance.verifyEmailInDatabase)

export { app }