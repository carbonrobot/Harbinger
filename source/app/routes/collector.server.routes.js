'use strict';

module.exports = function(app) {
	var collector = require('../../app/controllers/collector');
	app.route('/').post(collector.notify);
	app.route('/messages').get(collector.read)
};