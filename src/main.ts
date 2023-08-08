import 'reflect-metadata'
import './shared/container'

import express from 'express'
import path from 'path'
import router from './router'

import * as bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'public/pages'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', express.static(path.join(__dirname, 'public')))

app.use(cors())
app.use(express.json())
app.use('/api/', router)

export { app }