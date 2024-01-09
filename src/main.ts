import 'reflect-metadata'

import { pinoHttp } from 'pino-http'

import express from 'express'
import router from './router'

import { urlencoded } from 'body-parser'
import cors from 'cors'

const app = express()

app.use(urlencoded({ extended: true }))

app.use(pinoHttp({
	transport: {
		target: 'pino-pretty',
		options: {
			colorize: true
		}
	}
}))
app.use(cors())
app.use(express.json())
app.use('/api/', router)

export { app }