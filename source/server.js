'use strict';
/**
 * Module dependencies.
 */
var init = require('./config/init')(),
	config = require('./config/config'),
	mongoose = require('mongoose'),
	io = require('socket.io')(),
	http = require('http');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Bootstrap db connection
var db = mongoose.connect(config.db, function(err) {
	if (err) {
		console.error('\x1b[31m', 'Could not connect to MongoDB!');
		console.log(err);
	}
	else {
		console.log('Connected to MongoDB!');
	}
});

// Init the express application
var app = require('./config/express')(db);
var server = http.createServer(app);

// Start the app by listening on <port>
server.listen(config.port);

// enable socket.io communications
io.listen(server);
io.on('connect', function(){
	console.log('socket.io-client connected');
});

app.io = io;

// Expose app
exports = module.exports = app;

// Logging initialization
console.log('Application started on port ' + config.port);