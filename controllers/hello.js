
const mongoose = require('mongoose')

const Mschema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Movie Name is required']
    },
    date: {
        type: Number,
        required: [true, 'Movie Date is required']
    },
    poster: {
        type: String,
        required: [false]
    },
})
const Movies = mongoose.model('movies', Mschema)

const getMovies = async (req, res) => {
    try {

        let movies = await Movies.find()
        console.log("AAA")
        res.status(200).send({ data: movies, message: 'Movies fetch successfully' })
    } catch (err) {
        res.status(400).send({ error: true, message: err.message })
    }
}
// const postMovies = async  (req, res) => {
//     console.log(req.body)
//     const { error } =  db.Movies.validate(req.body)
//     if (error) return res.status(400).send({ message: error.details[0].message })
//     const movie = new Movies({ name: req.body.name, date: req.body.date, poster: req.body.poster })
//      movie.save()
//          .then((response) => {
//              res.status(201).send({ data: response, message: "Movie Saved Successfully" })
//         })
// }


module.exports = {
    getMovies //,postMovies
}