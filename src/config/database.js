const config = {
  HOST: process.env.DB_HOST || 'localhost',
  PORT: process.env.DB_PORT || 27017,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  NAME: process.env.DB_NAME || 'portfolio',
};

// Create a mongoDB connection URI string
// append URI string to config object
let uri = 'mongodb://';

if (process.env.DB_URI) {
  uri = process.env.DB_URI;
} else if (config.USER && config.PASSWORD) {
  uri += `${config.USER}:${config.PASSWORD}@`;
  uri += `${config.HOST}:${config.PORT}/${config.NAME}`;
}

config.URI = uri;

module.exports = config;
