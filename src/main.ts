require('dotenv').config()

import express from 'express'
import config from 'config'

const app = express()
const PORT = 8080

// const PORT = config.get<number>('port')

app.use(express.json())
app.use(express.static((`${__dirname}/public`)))

import db from '../config/db'

import router from './router'

app.use('/api/', router)

app.listen(PORT, async () => {
    await db()

    console.log(`Server runnning PORT ${PORT}`)
})