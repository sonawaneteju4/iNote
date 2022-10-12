const mongoose = require('mongoose');

const mongoURI = "mongodb://:27017/inote"

const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connection Done");
    })
}

module.exports = connectToMongo;