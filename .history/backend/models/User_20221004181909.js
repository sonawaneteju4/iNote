const mongoose  = require("mongoose");
const UserSchema = new Schema({
    userName : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
     date : {
        type: String,
        required: true
    },
})
