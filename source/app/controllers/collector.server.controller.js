'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	_ = require('lodash');

module.exports = function(app){

	var collector = {};

	// define the message ttl for each level in days
	var ttl = {
		debug: 7,
		info: 7,
		warn: 14,
		error: 30,
		fatal: 90,
	};

	// handle the message
	var notify = function(data, fn){
		var Message = mongoose.model('Message');
		
		// build the message for the mon-god
		var msg = new Message(data.body);
		msg.level = data.level;
		// data.ttl

		// save the message and callback
		msg.save(fn);
	};

	// handle the response
	var respond = function(err, msg, res){
		if (err) {
			return res.status(500).send({
				//message: errorHandler.getErrorMessage(err)
			});
		}
		else {
			// notify socket.io clients
			app.io.sockets.emit('notify', msg);

			// just return 200 SUCCESS
			return res.status(200).end();
		}
	};

	// Receives a message from a client
	collector.debug = function(req, res) {
		notify({ 
			body: req.body, 
			level: 'debug',
			ttl: ttl.debug
		}, function(err, msg){
			return respond(err, msg, res);
		});
	};

	// Receives a message from a client
	collector.info = function(req, res) {
		notify({ 
			body: req.body, 
			level: 'info',
			ttl: ttl.info
		}, function(err, msg){
			return respond(err, msg, res);
		});
	};

	// Receives a message from a client
	collector.warn = function(req, res) {
		notify({ 
			body: req.body, 
			level: 'warn',
			ttl: ttl.warn
		}, function(err, msg){
			return respond(err, msg, res);
		});
	};

	// Receives a message from a client
	collector.error = function(req, res) {
		notify({ 
			body: req.body, 
			level: 'error',
			ttl: ttl.error
		}, function(err, msg){
			return respond(err, msg, res);
		});
	};

	// Receives a message from a client
	collector.fatal = function(req, res) {
		notify({ 
			body: req.body, 
			level: 'fatal',
			ttl: ttl.fatal
		}, function(err, msg){
			return respond(err, msg, res);
		});
	};

	// Returns a list of messages to the client
	collector.read = function(req, res){
		var callback = function(err, msgs){
			if(err){
				return res.status(500).send({
					//message: errorHandler.getErrorMessage(err)
				});
			}
			else{
				return res.jsonp(msgs);	
			}
		};

		// compose a query
		var Message = mongoose.model('Message');
		var query = Message.find();
		
		// level is an exact match
		if(req.query.level){
			query.where('level').equals(req.query.level.toLowerCase());	
		}

		// like app
		if(req.query.app){
			var re = new RegExp(req.query.app.substr(1), 'i');
			query.where('app').equals({ $regex: re });
		}

		// like machine
		if(req.query.machine){
			var re = new RegExp(req.query.machine.substr(1), 'i');
			query.where('machine').equals({ $regex: re });
		}

		// like content
		if(req.query.content){
			var re = new RegExp(req.query.content.substr(1), 'i');
			query.where('content').equals({ $regex: re });
		}

		// limit the results
		if(req.query.limit){
			query.limit(req.query.limit);
		}
		else{
			query.limit(100);	
		}

		// always sort by created date desc
		query.sort('-created')
		query.exec(callback);
	};

	return collector;

};