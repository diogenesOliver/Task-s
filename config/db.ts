import mongoose from 'mongoose'
import config from 'config'

import Logger from './logger'

export class ConectDataBase {

    async connect(){
        const dbUri = config.get<string>('dbUri')

        await mongoose.connect(dbUri)
        Logger.info('Success connecting to database')
    }

}

const connectDB = new ConectDataBase()

export { connectDB }