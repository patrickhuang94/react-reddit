const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3001

const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const voteRoute = require('./routes/vote')

// .env configs
require('dotenv').config({path: '../../.env'})

app.listen(port, () => console.log(`Listening on port ${port}`))

app.use(bodyParser.json())
app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/vote', voteRoute)

module.exports = app
