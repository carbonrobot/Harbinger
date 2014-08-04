'use strict';

module.exports = {
	app: {
		title: 'harbinger',
		description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
		keywords: 'MongoDB, Express, AngularJS, Node.js'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/css/lib/bootstrap.css',
				'public/css/lib/bootstrap-theme.css'
			],
			js: [
				'public/js/angular/angular.js',
				'public/js/angular/angular-resource.js',
				'public/js/angular/angular-cookies.js',
				'public/js/angular/angular-animate.js',
				'public/js/angular/angular-touch.js',
				'public/js/angular/angular-sanitize.js',
				'public/js/angular/release/angular-ui-router.js',
				'public/js/angular/ui-utils.js',
				'public/js/angular/ui-bootstrap-tpls.js'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};