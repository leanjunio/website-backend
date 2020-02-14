const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./middleware/connectDB');
const configRoutes = require('./routes');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(connectDB);

configRoutes(app);

module.exports = {
  listen: port => app.listen(port, console.log(`Listening on port ${port}`)),
};
