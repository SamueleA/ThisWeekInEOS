let mongoose = require('mongoose');

//Article Schema
let articleSchema = mongoose.Schema({
  date: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Post', articleSchema);
