const { Schema, model } = require('mongoose');

const technologySchema = Schema({
  name: String,
});

module.exports = technologySchema;
