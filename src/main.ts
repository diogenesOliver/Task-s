import 'reflect-metadata'

import fastify from 'fastify'
import fastifyExpress from '@fastify/express'

import express from 'express'
import cors from 'cors'
import router from './router'

import { pinoHttp } from 'pino-http'
import { urlencoded } from 'body-parser'

const app = fastify()

app.register(fastifyExpress)
	.after(() => {
		app.use(express.json())
		app.use(urlencoded({ extended: false }))
		app.use('/v1/', router)
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

export { app }