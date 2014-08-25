'use strict';

module.exports = {
	app: {
		// define the message ttl for each level in days
		ttl: {
			debug: 1,
			info: 1,
			warn: 1,
			error: 1,
			fatal: 1,
			unit: 'hours'
		}
	},
	db: 'mongodb://localhost/harbinger-dev',
};