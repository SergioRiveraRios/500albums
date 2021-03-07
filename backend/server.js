import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import routes from './routes/index.js'
//Main server
const app = express()
const PORT = process.env.PORT || 5000

//Additional config
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/', routes)

app.listen(PORT, () => console.log(`Running on server ${PORT}`))