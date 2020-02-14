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

router.post('/', async (req, res) => {
  console.log('reached');
  let obj;
  try {
    obj = await Info.create({ summary: 'some desc' });
  } catch (err) {
    console.error(err);
  }
  res.json(obj);
});

module.exports = router;
