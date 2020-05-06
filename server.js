require('dotenv').config();
const express = require('express');
const expressConfig = require('./lib/express-config');
const mongoConfig = require('./lib/mongo-config');
const config = require('./lib/config');
const app = express();

//configure server
expressConfig(app);

//configure mongoDb
mongoConfig();

//Start server
app.listen(config.port, () => console.log(`Server is running on http://localhost:${config.port}`));