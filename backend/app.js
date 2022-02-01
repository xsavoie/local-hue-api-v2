// TEMP -- find long term solution to this
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const lightRouter = require('./routes/light');
const grouped_lightRouter = require('./routes/grouped_light');
const sceneRouter = require('./routes/scene');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/light', lightRouter);
app.use('/api/grouped_light', grouped_lightRouter);
app.use('/api/scene', sceneRouter);


module.exports = app;
