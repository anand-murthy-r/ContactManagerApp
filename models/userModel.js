const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add username"]
    },
    email: {
        type: String,
        required: [true, "Please enter email"],
        unique: [true, "Email address already taken."]
    },
    password: {
        type: String,
        required: [true, "Please enter user password."]
    },
}, {
    timeStamps: true
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;