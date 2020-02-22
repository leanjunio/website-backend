const { Router } = require('express');
const Experience = require('../models/experience');
const router = Router();

router.get('/', async (req, res, next) => {
  let experiences;
  try {
    experiences = await Experience.find({}).lean();
    experiences = experiences.sort((a, b) => b.start - a.start);
  } catch (error) {
    return next(error);
  }
  res.json(experiences);
});

module.exports = router;
