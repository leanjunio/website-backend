const infoRoutes = require('./infoRoutes');
const experienceRoutes = require('./experienceRoutes');
const projectRoutes = require('./projectRoutes');
const emailRoutes = require('./emailRoutes');

const path = require('path');

module.exports = app => {
  app.use('/api/info', infoRoutes);
  app.use('/api/experience', experienceRoutes);
  app.use('/api/project', projectRoutes);
  app.use('/api/email', emailRoutes);

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist/index.html'));
  });
};
