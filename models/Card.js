const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    get: value => value.toUpperCase()
  },
  description: {
    type: String,
    required: true
  },
  tags: [
    {
      type: String
    }
  ]
});

module.exports = mongoose.model('Card', cardSchema);
