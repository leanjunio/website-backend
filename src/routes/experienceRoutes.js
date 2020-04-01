const { Router } = require('express');
const httpStatus = require('http-status-codes');
const Sentry = require('@sentry/node');

const Experience = require('../models/experience');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    let experiences = await Experience.find({}).lean();
    experiences = experiences.sort((a, b) => b.start - a.start);
    res.status(httpStatus.OK).json(experiences);
  } catch (error) {
    Sentry.captureException(error);
    next(error);
  }
});

module.exports = router;
