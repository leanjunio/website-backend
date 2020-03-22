const { Router } = require('express');
const Info = require('../models/info');
const router = Router();

router.get('/', async (req, res, next) => {
  let info;
  try {
    info = await Info.find({});
    res.json(info);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
