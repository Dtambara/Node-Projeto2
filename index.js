const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const sessionConfig = require('./config/session');
const methodOverride = require('method-override');

const app = express();

app.use(express.static(path.resolve('app', 'public')));

const routes = require('./app/routes');

nunjucks.configure(path.resolve('app', 'views'), {
  autoescape: true,
  express: app,
});

app.set('view engine', 'njk');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session(sessionConfig));
app.use(flash());
app.use(methodOverride('_method'));
app.use('/', routes);

app.listen(process.env.PORT || 5000);
