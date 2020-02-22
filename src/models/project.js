const mongoose = require('mongoose');

// github, link, and image are links
// images are stored locally
const projectSchema = mongoose.Schema({
  name: String,
  github: String,
  desc: String,
  link: String,
  image: String,
  technology: [String],
});

module.exports = mongoose.model('project', projectSchema);
