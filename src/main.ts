require('dotenv').config()

import express from 'express'
import config from 'config'
import path from 'path'

const app = express()

const PORT = process.env.PORT || config.get<number>('port')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'public'))

app.use(express.json())
app.use('/api', express.static(path.join(__dirname, 'public')))

import db from '../config/db'
import router from './router'
import Logger from '../config/logger'

app.use('/api/', router)

app.listen(PORT, async () => {
    await db()

    Logger.info(`Server runnning PORT ${PORT}`)
})