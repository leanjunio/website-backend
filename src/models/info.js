const mongoose = require('mongoose');

const infoSchema = mongoose.Schema({
  summary: String,
  header: String,
  aboutMe: String,
});

module.exports = mongoose.model('info', infoSchema);
