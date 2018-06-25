const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3001

const index = require('./server/routes/api/index')

app.listen(port, () => console.log(`Listening on port ${port}`))

app.use(bodyParser.json())
app.use('/', index)

module.exports = app
