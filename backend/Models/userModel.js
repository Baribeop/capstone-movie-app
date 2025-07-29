const mongoose = require("mongoose")
const {Schema} = require('mongoose')

const userschema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},

    favourites: [{
        type: Schema.Types.ObjectId,
        ref: "Movie"
    }],

    followers: [{
        type: Schema.Types.ObjectId,
        ref: "Movie"
    }],

    following: [{
        type: Schema.Types.ObjectId,
        ref: "Movie"
    }],

    watchList : [{
        type: Schema.Types.ObjectId,
        ref: "Movie"
    }],

    profilePicture: {type: String, default: ''}

}, {timestamp: true})



const User = new mongoose.model("User", userschema)




module.exports = User