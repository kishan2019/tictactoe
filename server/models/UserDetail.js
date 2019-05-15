const mongoose = require('mongoose');

const userDetail = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  point: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model('score', userDetail);
