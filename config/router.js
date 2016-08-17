// -- Route manager for app
// ----------------------------------------------------------------

// -- Require statements
var express = require('express'),
    router = express.Router();

module.exports = function () {

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
	});
	
};