import { createClient } from 'redis'
import { config } from 'dotenv'
config()

import pinoExec from './logs/config'
import { app } from './main'

const PORT = 3000

const startup = async () => {
	
	await createClient().on('error', err => {
		pinoExec.error('Redis Client Error', err)
	}).connect()

	app.listen({ port: PORT }).then(() => {
		console.log(`Server running on port: ${PORT}`)
	})
}
startup()