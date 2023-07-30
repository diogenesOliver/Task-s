require('dotenv').config()

import { app } from './main'
const PORT = process.env.SERVER_PORT || 3001

app.listen(PORT, async () => {
    console.log(`Server running on port: ${PORT}`)
})