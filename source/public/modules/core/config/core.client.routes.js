'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		
		// Redirect to default view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider
		.state('default', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		})
		.state('app', {
			url: '/app/:app',
			templateUrl: 'modules/core/views/home.client.view.html'
		});
	}
]);