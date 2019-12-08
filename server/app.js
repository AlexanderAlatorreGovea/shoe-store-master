/* eslint-disable no-cond-assign */
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');

const productRouter = require('./routes/productRoutes');
const authRouter = require('./routes/authRoutes');

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

// 3) ROUTES
app.use('/api/v1/products', productRouter);
app.use('/api/v1/auth', authRouter);

module.exports = app;
