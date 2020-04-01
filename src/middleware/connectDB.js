const Sentry = require('@sentry/node');
const db = require('../db');

module.exports = async (req, res, next) => {
  try {
    await db.connect();
  } catch (error) {
    Sentry.captureException(error);
    return next(error);
  }
  
  const afterResponse = async () => {
    try {
      db.close();
    } catch (error) {
      Sentry.captureException(error);
    }
  }

  res.on('finish', afterResponse);
  res.on('close', afterResponse);

  next();
};
