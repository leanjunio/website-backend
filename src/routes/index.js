const httpStatus = require('http-status-codes');

const infoRoutes = require('./infoRoutes');
const experienceRoutes = require('./experienceRoutes');
const projectRoutes = require('./projectRoutes');
const emailRoutes = require('./emailRoutes');

module.exports = app => {
  app.get('/health', (req, res) => res.status(httpStatus.OK).send('Health check received'));
  app.use('/api/info', infoRoutes);
  app.use('/api/experience', experienceRoutes);
  app.use('/api/project', projectRoutes);
  app.use('/api/email', emailRoutes);
};
