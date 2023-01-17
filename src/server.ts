require('dotenv').config()

import config from 'config'

import { app } from './main'
import { connectDB } from "../config/db"
import Logger from "../config/logger";

const PORT = process.env.PORT || config.get<number>('port')

app.listen(PORT, () => {

    connectDB.connect()
    Logger.info(`Server runnning PORT ${PORT}`)

})