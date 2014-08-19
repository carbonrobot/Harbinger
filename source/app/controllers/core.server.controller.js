'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('layout', {
		user: req.user || null
	});
};