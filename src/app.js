const express = require('express');
const bodyParser = require('body-parser');
const Sentry = require('@sentry/node');

const db = require('./db');
const cors = require('cors');

const configRoutes = require('./routes');

const app = express();

Sentry.init({ dsn: process.env.SENTRY_DSN });

db.connect();
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.errorHandler());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

configRoutes(app);

module.exports = {
  listen: port => app.listen(port, console.log(`Listening on port ${port}`)),
};
