require('dotenv').config()

import express from 'express'
import config from 'config'
import path from 'path'

import router from './router'
import Logger from '../config/logger'

import { connectDB } from "../config/db";

const PORT = process.env.PORT || config.get<number>('port')

import * as bodyParser from 'body-parser'

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'public/pages'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', express.static(path.join(__dirname, 'public')))

app.use(express.json())
app.use('/api/', router)

app.listen(PORT, () => {

    connectDB.connect()
    Logger.info(`Server runnning PORT ${PORT}`)

})