const mongoose = require('mongoose');

const experienceSchema = mongoose.Schema({
  companyName: String,
  technology: [String],
  desc: [String],
});

module.exports = mongoose.model('experience', experienceSchema);
