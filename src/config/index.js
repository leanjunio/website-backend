const dbConfig = require('./database');
const sendgridConfig = require('./sendgrid');
const emailConfig = require('./email');

module.exports = {
  PORT: process.env.PORT || 3000,
  DB: dbConfig,
  EMAIL: emailConfig,
  SENDGRID: sendgridConfig,
};
