const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  summary: String,
  header: String,
  aboutMe: String,
  experience: [
    {
      companyName: String,
      technology: [String],
      position: String,
      location: String,
      desc: String,
      duration: String,
      type: String,
      start: Date,
      end: Date,
    },
  ],
  project: [
    {
      name: String,
      github: String,
      link: String,
      image: String,
      technology: [String],
    },
  ],
});

module.exports = mongoose.model('profile', profileSchema);
