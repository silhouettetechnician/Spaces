const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: { type: String },
  rating: { type: Number, required: true, min: 0, max: 5},
  createdAt: { type: Date, default: Date.now }
})

const spacesSchema = new mongoose.Schema({
  location: { type: String, required: true },
  type: { type: String, required: true },
  suitability: { type: String, required: true },
  image: { type: Array },
  availability: { type: Boolean, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User' },
  comments: [ commentSchema ]
})

module.exports = mongoose.model('Space', spacesSchema)
