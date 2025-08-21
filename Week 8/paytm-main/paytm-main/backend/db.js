const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://admin:GoJBMbIWSJ9SLHIx@cluster0.vnwgvpl.mongodb.net/week8-Paytm")

//Schema to store user data
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});

//Bank related schema
const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const User = new mongoose.model("User", userSchema);
const Account = new mongoose.model("Account", accountSchema);

module.exports = { User, Account }