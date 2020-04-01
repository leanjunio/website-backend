const { Router } = require('express');
const httpStatus = require('http-status-codes');
const Sentry = require('@sentry/node');

const Info = require('../models/info');
const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const info = await Info.find({});
    res.status(httpStatus.OK).json(info);
  } catch (error) {
    Sentry.captureException(error);
    next(error);
  }
});

module.exports = router;
