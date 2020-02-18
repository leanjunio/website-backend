const mongoose = require('mongoose');

const experienceSchema = mongoose.Schema({
  companyName: String,
  technology: [String],
  position: String,
  location: String,
  desc: String,
  duration: String,
  type: String,
  start: Date,
  end: Date,
});

module.exports = mongoose.model('experience', experienceSchema);
