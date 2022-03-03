const jwt = require("jsonwebtoken")

const config = require('../config')

const verifyToken = (req, res, next) => {

    const token = req.body.token || req.query.token || req.headers["x-access-token"]

    if (!token) {
        return res.status(403).send("A token is required for authentication")
    }

    try {
        req.user = jwt.verify(token, config.tokenSecret)
    } catch (err) {
        return res.status(401).send("Invalid token")
    }

    return next()
}

module.exports = verifyToken