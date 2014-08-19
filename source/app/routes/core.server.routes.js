'use strict';

module.exports = function(app) {
	var core = require('../../app/controllers/core');
	app.route('/').get(core.index);
};