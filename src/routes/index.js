const infoRoutes = require('./infoRoutes');
const experienceRoutes = require('./experienceRoute');
const projectRoutes = require('./projectRoutes');
const profileRoutes = require('./profileRoutes');

module.exports = app => {
  app.use('/profile', profileRoutes);
};
