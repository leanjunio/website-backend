const mongoose = require('mongoose');
const technologySchema = require('../schemas/technology');

const experienceSchema = mongoose.Schema({
  companyName: String,
  technology: [technologySchema],
  desc: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model('experience', experienceSchema);
