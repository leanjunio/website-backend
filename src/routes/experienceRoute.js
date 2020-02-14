const { Router } = require('express');
const Experience = require('../models/experience');
const router = Router();

router.get('/', async (req, res, next) => {
  let experiences;
  try {
    experiences = await Experience.find({});
  } catch (error) {
    return next(error);
  }
  res.json(experiences);
});

router.post('/', async (req, res) => {
  let obj;
  try {
    obj = await Experience.create({
      companyName: 'Mintbean',
      technology: ['React', 'PostgreSQL', 'MongoDB', 'Mongoose', 'REST APIs', 'Express', 'Node.js'],
      desc: ['Amazing fun', 'Career progressing'],
    });
  } catch (err) {
    console.error(err);
  }
  res.json(obj);
});

module.exports = router;
