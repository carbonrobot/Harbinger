'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Messages',
	function($scope, Messages) {
		$scope.messages = [];

		var find = function(){
			$scope.messages = Messages.query();	
		};			

		find();
	}
]);