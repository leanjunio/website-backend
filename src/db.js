const mongoose = require('mongoose');
const Sentry = require('@sentry/node');

const config = require('./config');

module.exports = {
  connect: async () => {
    await mongoose.connect(config.DB.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      keepAlive: true,
    });
    mongoose.connection.on('error', err => Sentry.captureException(err));
  },
  close: () => mongoose.connection.close(() => console.log('Mongoose disconnected')),
};
