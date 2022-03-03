const dotenv =  require('dotenv')
const assert = require('assert')

dotenv.config()

const { PORT, HOST, HOST_URL, API_KEY, TOKEN_SECRET, MONGO_URI } = process.env

assert(PORT, 'PORT is required')
assert(HOST, 'HOST is required')

module.exports = {

    port: PORT,
    host: HOST,
    hostUrl: HOST_URL,
    apiKey: API_KEY,
    tokenSecret: TOKEN_SECRET,
    mongoUri: MONGO_URI

}