const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, validate: [ validator.isEmail, 'invalid Email'], required: true, unique: true, trim: true },
  password: { type: String, required: true, trim: true },
  telephone: { type: Number, required: true, trim: true }
})

module.exports = mongoose.model('User', userSchema)