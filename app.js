require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const passport = require('passport');
require('./middlewares/passport.js')();

const indexRouter = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', passport.authenticate('google'), indexRouter);

app.listen(PORT, () => {
  console.log('App listening on port:', PORT)
})

module.exports = app;
