const mongoose  = require("mongoose");
const UserSchema = new Schema({
    userName : {
        type: String,
        required: true
    },
})
