'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	_ = require('lodash'),
	moment = require('moment');

module.exports = function(app){

	var collector = {};

	// handle the message
	var notify = function(data, fn){
		var Message = mongoose.model('Message');
		
		// build the message for the mon-god
		var msg = new Message(data.body);
		msg.level = data.level;
		msg.expiresAt = moment().add(data.ttl, app.config.ttl.unit).utc();

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
			ttl: app.config.ttl.debug
		}, function(err, msg){
			return respond(err, msg, res);
		});
	};

	// Receives a message from a client
	collector.info = function(req, res) {
		notify({ 
			body: req.body, 
			level: 'info',
			ttl: app.config.ttl.info
		}, function(err, msg){
			return respond(err, msg, res);
		});
	};

	// Receives a message from a client
	collector.warn = function(req, res) {
		notify({ 
			body: req.body, 
			level: 'warn',
			ttl: app.config.ttl.warn
		}, function(err, msg){
			return respond(err, msg, res);
		});
	};

	// Receives a message from a client
	collector.error = function(req, res) {
		notify({ 
			body: req.body, 
			level: 'error',
			ttl: app.config.ttl.error
		}, function(err, msg){
			return respond(err, msg, res);
		});
	};

	// Receives a message from a client
	collector.fatal = function(req, res) {
		notify({ 
			body: req.body, 
			level: 'fatal',
			ttl: app.config.ttl.fatal
		}, function(err, msg){
			return respond(err, msg, res);
		});
	};

	// Returns a list of messages to the client
	collector.read = function(req, res){

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

		// skip results for paging
		if(req.query.skip){
			query.skip(req.query.skip);
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
		query.exec(function(err, msgs){
			if(err){
				return res.status(500).send({
					//message: errorHandler.getErrorMessage(err)
				});
			}
			else{
				return res.jsonp(msgs);	
			}
		});
	};

	return collector;

};