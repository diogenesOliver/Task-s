import 'reflect-metadata'

import express from 'express'
import router from './router'

import * as bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())
app.use(express.json())
app.use('/api/', router)

export { app }