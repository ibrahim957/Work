const config = require('../config')

const verifyToken = function (req, res, next) {

    const token = req.body.token || req.query.token || req.headers["x-api-key"]

    if (!token) {
        res.status(403).send('Please provide a token')
    } else if (token !== config.apiKey) {
        res.status(401).send('Please provide correct token')
    } else {
        next()
    }

}

module.exports = verifyToken