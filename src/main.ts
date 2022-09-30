import express from 'express'

const app = express()
const PORT = 8080

app.use(express.json())

import router from './router'

app.use('/api/', router)

app.listen(PORT, () => {
    console.log(`Server runnning PORT ${PORT}`)
})