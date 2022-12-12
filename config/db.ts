import mongoose from 'mongoose'
import config from 'config'

import Logger from './logger'

async function connect(){

    const dbUri = config.get<string>('dbUri')

    try {
        
        await mongoose.connect(dbUri)
        Logger.info('Sucesso ao conectar ao banco de dados')

    } catch (e: any) {

        Logger.error(`ERROR: ${e}`)

    }

}

export default connect