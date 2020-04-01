const { Router } = require('express');
const mongoose = require('mongoose');
const httpStatus = require('http-status-codes');
const Sentry = require('@sentry/node');

const Project = require('../models/project');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    let projects = await Project.find({});
    res.status(httpStatus.OK).json(projects);
  } catch (error) {
    Sentry.captureException(error);
    next(error);
  }
});

router.get('/website', async (req, res, next) => {
  try {
    let websiteProject = await Project.findOne({ name: 'leanjunio.com' });
    res.status(httpStatus.OK).json(websiteProject);
  } catch (error) {
    Sentry.captureException(error);
    next(error);
  }
});

module.exports = router;
