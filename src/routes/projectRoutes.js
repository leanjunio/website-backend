const { Router } = require('express');
const httpStatus = require('http-status-codes');
const Sentry = require('@sentry/node');

const Project = require('../models/project');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    let projects = await Project.find({}).lean();
    res.status(httpStatus.OK).json(projects);
  } catch (error) {
    Sentry.captureException(error);
    return next(error);
  }
});

router.get('/website', async (req, res, next) => {
  try {
    let websiteProject = await Project.findOne({ name: 'leanjunio.com' }).lean();
    res.status(httpStatus.OK).json(websiteProject);
  } catch (error) {
    Sentry.captureException(error);
    return next(error);
  }
});

module.exports = router;
