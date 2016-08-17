// -- Require statements
var express = require('express'),
    router = express.Router(),
    // throng   = require("throng"),
    Article = require('../models/article');

// // -- Configure settings from environment config
// var PORT  = process.env.PORT || 3000;
// var WORKERS = process.env.WEB_CONCURRENCY || 1;

// // -- define throng settings - a worker manager for clustered app
// // -- https://github.com/hunterloftis/throng
// throng(start, {
//     workers: WORKERS,
//     lifetime: Infinity
// });

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('index', {
      title: 'Developer',
      articles: articles
    });
})

router.get('/design', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('index', {
    	layout: 'new',
      title: 'Designer',
      articles: articles
    });
})
;
