const infoRoutes = require('./infoRoutes');
const experienceRoutes = require('./experienceRoutes');
const projectRoutes = require('./projectRoutes');
const emailRoutes = require('./emailRoutes');

const path = require('path');

module.exports = app => {
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  app.use('/api/info', infoRoutes);
  app.use('/api/experience', experienceRoutes);
  app.use('/api/project', projectRoutes);
  app.use('/api/email', emailRoutes);

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist/index.html'));
  });
};
