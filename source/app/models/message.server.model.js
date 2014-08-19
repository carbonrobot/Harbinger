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
		trim: true,
		required: 'Machine name cannot be null'
	},
	content: {
		type: String,
		default: '',
		trim: true,
		required: 'Content cannot be null'
	}
});

mongoose.model('Message', MessageSchema);