const mongoose = require('mongoose');

const mongoURI = ""

const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connection Done");
    })
}

module.exports = connectToMongo;