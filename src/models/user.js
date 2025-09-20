const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type: "string"
    },
    lastName: {
        type: "string"
    },
    email: {
        type: "string"
    },
    password: {
        type:"string"
    },
    age: {
        type: "string"
    },
    gender: {
        type: "string"
    }
})

const User = mongoose.model("User", userSchema);

module.exports = {User};