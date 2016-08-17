// -- Express setup for app
// ----------------------------------------------------------------

// -- Require statements
var express = require('express');
var glob = require('glob'); //add support for handling file patterns like `foo/*` or `bar/**/*.js`
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compress = require('compression');
var methodOverride = require('method-override');
var hbs  = require('express-hbs');

module.exports = function(app, config) {
  // -- Configure environment properties
  var env = process.env.NODE_ENV || 'development';
  app.locals.ENV = env;
  app.locals.ENV_DEVELOPMENT = env == 'development';
  
  // -- Configure Handlebars templating
  app.engine('hbs', hbs.express4({
    layoutsDir: config.root + '/app/views/layouts/',
    defaultLayout: './app/views/layouts/main',
    partialsDir: [config.root + '/app/views/partials/']
  }));
  app.set('views', config.root + '/app/views');
  app.set('view engine', 'hbs');

  // -- Configure static file location
  app.use(express.static(config.root + '/public'));

  // -- What are all of these for? Necessary?
  app.use(favicon(config.root + '/favicon.ico'));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(cookieParser());
  app.use(compress());
  app.use(methodOverride());

  // -- Require each controller in the app
  var controllers = glob.sync(config.root + '/app/controllers/*.js');
  controllers.forEach(function (controller) {
    require(controller)(app);
  });

  // -- Configure 404 and error conditions
  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  if(app.get('env') === 'development'){
    app.use(function (err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err,
        title: 'error'
      });
    });
  }

  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: {},
        title: 'error'
      });
  });

};
