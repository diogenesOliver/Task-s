import { createClient } from 'redis'
import { config } from 'dotenv'
config()

import pinoExec from './logs/config'
import { app } from './main'
const PORT = process.env.SERVER_PORT || 3001

const startup = async () => {
	
	await createClient().on('error', err => {
		pinoExec.error('Redis Client Error', err)
	}).connect()

	app.listen(PORT, async () => {
		pinoExec.info(`Server running on port: ${PORT}`)
	})
}
startup()