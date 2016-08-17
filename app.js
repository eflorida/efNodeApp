// -- Original app scaffolded with Yeoman
// -- https://github.com/petecoop/generator-express
// ----------------------------------------------------------------
// -- App author: Erik Florida
// ----------------------------------------------------------------

var express = require('express'),
	config = require('./config/config');

var app = express();

require('./config/express')(app, config);

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});

