const mongoose  = require("mongoose");

const UserSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    descri : {
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

module.exports = mongoose.model('user', UserSchema);
