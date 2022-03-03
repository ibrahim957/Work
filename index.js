const express = require('express')
const bodyParser = require('body-parser')
///const cors = require('cors')
//const helmet = require('helmet')
//const morgan = require('morgan')

const db = require('./db')
const config = require('./config')
const hello = require('./routes/hello_route')

db.connect()

const app = express()
app.use(express.json())
app.use('/api/getMovies',hello.routes)
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to node',
    })
})

app.listen(config.port, () => {
    console.log('App is listening on url ' + config.hostUrl)
})

module.exports = app