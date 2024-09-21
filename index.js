const mongoose = require('mongoose')
//include database name
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
.then( ()=>{
    console.log("CONNECTION OPEN!!!")
})
.catch(err=> {
    console.log("oh no error!!")
    console.log(err)
})

//create schema for movies
const movieSchema = new mongoose.Schema({
    title : String,
    year : Number,
    score: Number,
    rating: String
});

//using above schema we want to create a model
//pass in a string which is name of our model, then pass schema
//name must be singular and first letter capita;, mongoose will create collection for us with plural adding s
const Movie = mongoose.model('Movie', movieSchema)

// we can now make instances of our movie class
const starwars = new Movie({title :"Star Wars", year : 1980, score :10, rating :'PG'})

// starwars.save() in node terminal will save it to the moviesApp database

Movie.insertMany([
    {title: "Back to the Future", year: 1975, score:9.7, rating: "PG-13"},
    {title: "Star Trek", year: 1905, score:7.3, rating: "R"},
    {title: "Barbie", year: 2005, score:9.2, rating: "PG-13"},
    {title: "Superman", year: 1995, score:8.4, rating: "PG"}

])
.then(data =>{
    console.log("it worked!")
    console.log(data)
})