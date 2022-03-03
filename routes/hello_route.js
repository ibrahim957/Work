const express = require('express')

const hello = require('../controllers/hello')

const router = express.Router()


router.get('/', hello.getMovies)

//router.post('/postMovies', postMovies)

module.exports = {
    routes: router
}