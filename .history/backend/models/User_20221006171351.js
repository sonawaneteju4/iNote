const mongoose  = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    userName : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
     date : {
        type: String,
        default: Date.now
    }
})

const User = 
module.exports = mongoose.model('user', UserSchema);
