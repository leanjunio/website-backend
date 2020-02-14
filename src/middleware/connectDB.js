const db = require('../db');

module.exports = async (req, res, next) => {
  try {
    await db.connect();
  } catch (error) {
    return next(error);
  }

  const afterResponse = async () => {
    try {
      db.close();
    } catch (err) {
      console.error(err);
    }
  };

  res.on('finish', afterResponse);
  res.on('close', afterResponse);

  next();
};
