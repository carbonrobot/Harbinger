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
		required: 'Level cannot be null',
		lowercase: true
	},
	app: {
		type: String,
		default: '',
		trim: true,
		required: 'App cannot be null',
		lowercase: true
	},
	machine: {
		type: String,
		default: '',
		trim: true,
		required: 'Machine name cannot be null',
		lowercase: true
	},
	content: {
		type: String,
		default: '',
		trim: true,
		required: 'Content cannot be null'
	}
});

mongoose.model('Message', MessageSchema);