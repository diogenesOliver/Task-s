require('dotenv').config()

import express from 'express'
import config from 'config'

const app = express()
const PORT = 8080

// const PORT = config.get<number>('port')

app.use(express.json())

import router from './router'

app.use('/api/', router)

app.listen(PORT, () => {
    console.log(`Server runnning PORT ${PORT}`)
})