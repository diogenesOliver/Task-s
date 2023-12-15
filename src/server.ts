import { createClient } from 'redis'
import { config } from 'dotenv'
config()

import { app } from './main'
const PORT = process.env.SERVER_PORT || 3001

const startup = async () => {
	
	await createClient().on('error', err => {
		console.log('Redi Client Error', err)
	}).connect()

	app.listen(PORT, async () => {
		console.log(`Server running on port: ${PORT}`)
	})
}
startup()