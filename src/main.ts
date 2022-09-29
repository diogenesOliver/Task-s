import express from 'express'
import { returningScreen } from './controllers/linkController'

const app = express()
const PORT = 3000

app.get('/', returningScreen)

app.listen(PORT, () => {
    console.log(`Server runnning PORT ${PORT}`)
})