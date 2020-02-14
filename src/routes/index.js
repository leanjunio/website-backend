const infoRoutes = require('./infoRoutes');
const experienceRoutes = require('./experienceRoute');
const projectRoutes = require('./projectRoutes');

module.exports = app => {
  app.use('/info', infoRoutes);
  app.use('/experience', experienceRoutes);
  app.use('/project', projectRoutes);
};
