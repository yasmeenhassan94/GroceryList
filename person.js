/***************************
 * Mongoose setup 
*****************************/

const mongoose = require('mongoose')
//include database name
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
.then( ()=>{
    console.log("CONNECTION OPEN!!!")
})
.catch(err=> {
    console.log("oh no error!!")
    console.log(err)
})

/***************************
 * Schema
*****************************/
const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

// define virtual, will behave like an actual property
//can access as if a property objectname.fullName
//only exists in mongoose not in the database
//we use this for info we access frequently from existing data
personSchema.virtual('fullName').get(function () {
    //this referring to the instance we're working with, current instance
    return `${this.first} ${this.last}`
})

/***************************
 * Middleware
*****************************/
//accept a parameter and execute at end of function Or return promise, 
//most important thing is that it occurs in teh middle of something & continues to run after it

personSchema.pre('save', async function() {
    console.log('About to save!')
})
personSchema.post('save', async function() {
    console.log('Saved!')
})

const Person = mongoose.model('Person',personSchema);