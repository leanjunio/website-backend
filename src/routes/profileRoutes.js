const { Router } = require('express');
const Profile = require('../models/profile');
const router = Router();

router.get('/', async (req, res, next) => {
  let profile;
  try {
    profile = await Profile.find({});
    // experiences = experiences.sort((a, b) => b.start - a.start);
  } catch (error) {
    return next(error);
  }
  res.json(profile);
});

router.post('/', async (req, res) => {
  let obj;
  try {
    obj = await Profile.create({
      summary: `Summary`,
      header: `My name is Lean and I'm a Software Developer from Toronto, Canada. Pleased to meet you!`,
      aboutMe: 'about me',
      experience: [
        {
          companyName: 'Mintbean',
          desc:
            'My role within Mintbean was to gather requirements, create user stories out of them, UI/UX design, and then develop applications from the designs using code.',
          duration: '12/2019 – Present',
          location: 'Toronto, ON',
          position: 'Software Developer (Full Stack)',
          technology: [
            'React',
            'PostgreSQL',
            'Sequelize',
            'MongoDB',
            'Mongoose',
            'Node.js',
            'Git',
            'JavaScript (ES6)',
            'SCSS',
            'REST',
            'APIs',
          ],
          type: 'professional',
        },
      ],
    });
  } catch (err) {
    console.error(err);
  }
  res.json(obj);
});

module.exports = router;
