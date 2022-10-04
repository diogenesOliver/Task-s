import mongoose from 'mongoose'
import config from 'config'

async function connect(){

    const dbUri = config.get<string>('dbUri')

    try {
        
        await mongoose.connect(dbUri)
        console.log('Sucesso ao conectar ao banco de dados')
    } catch (e) {
        console.log('Houve um erro ao conectar ao banco de dados')
        console.log(`ERROR: ${e}`)
    }

}

export default connect