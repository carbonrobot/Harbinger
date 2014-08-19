'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Message Schema
 */
var MessageSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	level: {
		type: String,
		default: '',
		trim: true,
		required: 'Level cannot be null'
	},
	app: {
		type: String,
		default: '',
		trim: true,
		required: 'App cannot be null'
	},
	machine: {
		type: String,
		default: '',
		trim: true
	},
	content: {
		type: String,
		default: '',
		trim: true
	}
});

mongoose.model('Message', MessageSchema);