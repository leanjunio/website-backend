const { Router } = require('express');
const Info = require('../models/info');
const router = Router();

router.get('/', async (req, res, next) => {
  let info;
  try {
    info = await Info.find({});
  } catch (error) {
    return next(error);
  }
  res.json(info);
});

module.exports = router;
