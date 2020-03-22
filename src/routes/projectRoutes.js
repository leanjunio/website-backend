const { Router } = require('express');
const Project = require('../models/project');
const router = Router();

router.get('/', async (req, res, next) => {
  let projects;
  try {
    projects = await Project.find({});
    res.json(projects);
  } catch (error) {
    return next(error);
  }
});

router.get('/website', async (req, res, next) => {
  let websiteProject;
  try {
    websiteProject = await Project.findOne({ name: 'leanjunio.com' });
    res.json(websiteProject);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
