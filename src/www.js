require('dotenv').config();
const config = require('./config');
const app = require('./app');

// Open DB connection & listen for requests
app.listen(config.PORT);
