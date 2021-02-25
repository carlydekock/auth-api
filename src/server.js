'use strict';

require('dotenv').config();
//3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

//Esoteric Resources
const errorHandler = require('./middleware/500.js');
const notFound = require('./middleware/404.js');
const authRoutes = require('./auth/router.js');
const logger = require('./middleware/logger.js');
const v1Routes = require('./routes/v1.js');
const v2Routes = require('./routes/v2.js');

const app = express();

app.use(cors());
app.use(logger);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', v1Routes);
// app.use(v1Routes);
app.use('/api/v2', v2Routes);
// app.use(v2Routes);

//Routes
app.use(authRoutes);

//Catchalls
app.use('*', notFound);
app.use(errorHandler);


module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};
