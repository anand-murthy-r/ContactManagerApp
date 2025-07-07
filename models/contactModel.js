const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add contact name."]
    },
    email: {
        type: String,
        required: [true, "Please add email address."]
    },
    phone: {
        type: String,
        required: [true, "Please add phone number."]
    }

}, {
    timeStamps: true
});

module.exports = mongoose.model("Contact", contactSchema);