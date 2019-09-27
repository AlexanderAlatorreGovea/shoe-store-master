/* eslint-disable no-cond-assign */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const compression = require('compression');

const app = express();

app.use(cors());

app.options('*', cors());

// Set security HTTP headers
app.use(helmet());

if (process.env.NODE_ENV = 'development') {
  app.use(morgan('dev'));
}

//BODY PARSER OR READING DATA FROM THE BODY INTO REQ.BODY
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

//DATA SANITIZATION against no sql query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

//serving static files
app.use(compression());

app.use(express.json());

module.exports = app;
