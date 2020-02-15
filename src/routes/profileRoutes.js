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
          companyName: `Comsale Computers Inc (Non-Development)`,
          desc: `While working at Comsale full-time, I started dabbling into web development through the online platform "FreeCodeCamp". I started learning the basics of Web Development (HTML, CSS, and JavaScript). I spent the next few months doing a deep dive into the world of Web Development by reading dev topics on medium, Mozilla's MDN Documentation, and Google.`,
          duration: `02/2016 - 10/2016`,
          type: `professional`,
        },
        {
          companyName: `Seneca College`,
          desc: `This three-year advanced diploma program provides you with the skills and knowledge to begin your career as a software developer. You will learn programming languages, program design and system analysis. Web concepts are integrated into all courses to develop active database web programs on a variety of operating systems. Advanced techniques are taught through professional option courses.`,
          duration: `01/2018 - 09/2019`,
          type: `academic`,
          technology: [
            'C',
            'C++',
            'Java',
            'Object-Oriented Programming',
            'System Design and Analysis',
            'Database Concepts',
            'Web Development Concepts',
          ],
        },
        {
          companyName: 'Mintbean',
          technology: ['React', 'PostgreSQL', 'MongoDB', 'Mongoose', 'REST APIs', 'Express', 'Node.js'],
          desc:
            'My role within Mintbean was to gather requirements, create user stories out of them, UI/UX design, and then develop applications from the designs using code',
        },
      ],
    });
  } catch (err) {
    console.error(err);
  }
  res.json(obj);
});

module.exports = router;
