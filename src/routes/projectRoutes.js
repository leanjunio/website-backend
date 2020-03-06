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

router.get('/website', async (req, res, next) => {
  let websiteProject;
  try {
    websiteProject = await Project.findOne({ name: 'leanjunio.com' });
  } catch (error) {
    return next(error);
  }
  res.json(websiteProject);
});

// router.post('/', async (req, res, next) => {
//   let p;
//   try {
//     p = await Project.create({
//       name: 'website',
//       desc:
//         'This website is a full-stack application that utilizes a MERN stack. All the APIs are written in Express and React fetches all the data stored in MongoDB.',
//     });
//   } catch (err) {
//     next(err);
//   }
//   res.json(p);
// });

module.exports = router;
