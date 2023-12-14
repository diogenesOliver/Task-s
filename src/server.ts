import { createClient } from 'redis'
import { config } from 'dotenv'
config()

export const client = createClient()

import { app } from './main'
const PORT = process.env.SERVER_PORT || 3001

const startup = async () => {
	await client.connect()
	app.listen(PORT, async () => {
		console.log(`Server running on port: ${PORT}`)
	})
}
startup()