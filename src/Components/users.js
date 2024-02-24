const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    email: String,
  username:String,
  number:Number
})

const mdl = mongoose.model("users", userSchema)
module.exports = mdl