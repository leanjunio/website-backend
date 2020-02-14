const mongoose = require('mongoose');

const infoSchema = mongoose.Schema({
  summary: String,
});

module.exports = mongoose.model('info', infoSchema);
