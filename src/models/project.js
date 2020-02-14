const mongoose = require('mongoose');
const technologySchema = require('../schemas/technology');

// github, link, and image are links
// images are stored locally
const projectSchema = mongoose.Schema({
  name: String,
  github: String,
  link: String,
  image: String,
  technology: [technologySchema],
});

module.exports = mongoose.model('project', projectSchema);
