var mongoose = require('mongoose')

var recippiSchema = mongoose.Schema({
  title: { type: String, required: true },
  ingredients: [{
    name: String,
    quantity: Number
  }],
  type: { type: String, required: true },
  time: { type: Number, required: false },
  serving: { type: Number, required: true },
  calories: { type: Number, required: false },
  content: [{
    Steps: Number,
    Directions: String
  }],
  notes: { type: String, required: false },

})

var Recippi = mongoose.model('recippi', recippiSchema)
module.exports = Recippi
