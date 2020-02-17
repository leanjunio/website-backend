const mongoose = require('mongoose');

const experienceSchema = mongoose.Schema({
  companyName: String,
  technology: [String],
  position: String,
  location: String,
  desc: String,
  duration: String,
  type: { type: String },
  start: Date,
  end: Date,
});

const projectSchema = mongoose.Schema({
  name: String,
  github: String,
  link: String,
  image: String,
  technology: [String],
});

const profileSchema = mongoose.Schema({
  summary: String,
  header: String,
  aboutMe: String,
  experience: [experienceSchema],
  project: [projectSchema],
});

module.exports = mongoose.model('profile', profileSchema);
