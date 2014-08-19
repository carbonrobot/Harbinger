'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Message = mongoose.model('Message'),
	_ = require('lodash');


exports.notify = function(req, res) {
	var msg = new Message(req.body);
	msg.save(function(err){
		if (err) {
			return res.status(500).send({
				//message: errorHandler.getErrorMessage(err)
			});
		}
		else {
			return res.send(200);
		}
	});
};

exports.read = function(req, res){
	Message.find().sort('-created').exec(function(err, msgs){
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