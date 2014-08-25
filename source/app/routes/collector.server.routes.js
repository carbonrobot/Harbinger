'use strict';

module.exports = function(app) {
	var collector = require('../../app/controllers/collector')(app);
	
	// collector
	app.route('/:level').post(collector.receive);

	// reporting
	app.route('/messages').get(collector.read);
};