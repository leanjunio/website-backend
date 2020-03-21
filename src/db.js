const mongoose = require('mongoose');
const config = require('./config');

module.exports = {
  connect: async () => {
    await mongoose.connect(config.DB.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      keepAlive: true,
    });
    mongoose.connection.on('error', err => console.error(err));
  },
  close: async () => await mongoose.disconnect(),
};
