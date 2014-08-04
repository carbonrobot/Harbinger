'use strict';

// Module dependencies.
var init = require('./config/init')(),
	config = require('./config/config'),
	mongoose = require('mongoose');

// Bootstrap db connection
var db = mongoose.connect(config.db);

// Init the express application
var app = require('./config/express')(db);

// Start the app by listening on <port>
app.listen(config.port);

// Expose app
exports = module.exports = app;

// Logging initialization
console.log('app listening on port ' + config.port);