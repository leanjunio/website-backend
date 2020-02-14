const { Router } = require('express');
const Project = require('../models/experience');
const router = Router();

router.get('/', async (req, res, next) => {
  let projects;
  try {
    projects = await Project.find({});
  } catch (error) {
    return next(error);
  }
  res.json(projects);
});

module.exports = router;
