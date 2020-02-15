const mongoose = require('mongoose');

const experienceSchema = mongoose.Schema({
  companyName: String,
  technology: [String],
  position: String,
  location: String,
  desc: String,
  duration: String,
});

module.exports = mongoose.model('experience', experienceSchema);
