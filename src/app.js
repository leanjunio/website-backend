const express = require('express');
const bodyParser = require('body-parser');
const Sentry = require('@sentry/node');

const connectDB = require('./middleware/connectDB');
const cors = require('cors');

const configRoutes = require('./routes');

const app = express();

Sentry.init({ dsn: process.env.SENTRY_DSN });

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.errorHandler());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(connectDB);

configRoutes(app);

module.exports = {
  listen: port => app.listen(port, console.log(`Listening on port ${port}`)),
};
