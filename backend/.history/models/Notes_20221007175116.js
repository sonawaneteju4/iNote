const mongoose  = require("mongoose");
const {Schema} = mongoose;

const NoteSchema = new Schema({
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
        default: "General"
    },
     date : {
        type: String,
        default: Date.now
    }
})

const N = mongoose.model('user', UserSchema)
module.exports = User;

module.exports = mongoose.model('user', NoteSchema);
