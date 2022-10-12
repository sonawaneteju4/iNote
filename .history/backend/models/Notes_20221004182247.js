const mongoose  = require("mongoose");

const UserSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true,
    
    },
    tag : {
        type: String,
        default: ""
    },
     date : {
        type: String,
        default: Date.now
    }
})

module.exports = mongoose.model('user', UserSchema);
