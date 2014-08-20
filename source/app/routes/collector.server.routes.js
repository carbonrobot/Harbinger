'use strict';

module.exports = function(app) {
	var collector = require('../../app/controllers/collector');
	
	// collector routes
	app.route('/debug').post(collector.debug);
	app.route('/info').post(collector.info);
	app.route('/warn').post(collector.warn);
	app.route('/error').post(collector.error);
	app.route('/fatal').post(collector.fatal);

	// reporting routes
	app.route('/messages').get(collector.read);
};