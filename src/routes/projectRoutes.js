const { Router } = require('express');
const Project = require('../models/project');
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

router.post('/', async (req, res) => {
  let obj;
  try {
    obj = await Project.create({
      name: 'Platform',
      github: 'github.com/leanjunio/platform',
      link: 'github.com/leanjunio/platform',
      image: 'img.google.ca',
      technology: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Node', 'Webpack'],
    });
  } catch (err) {
    console.error(err);
  }
  res.json(obj);
});
module.exports = router;
