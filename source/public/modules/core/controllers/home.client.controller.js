'use strict';

angular.module('core').controller('HomeController', ['$scope', 'messageService', 'socketio',
	function($scope, messageService, socketio) {
		$scope.messages = [];
		$scope.load = function _load(){
			messageService.query({skip: $scope.messages.length, limit: 100}, function(data){
				$scope.messages.push.apply($scope.messages, data);
			});	
		};		

		var addMessage = function(msg){
			$scope.messages.unshift(msg);
		};
		
		// init
		(function(){

			// preload the message list
			$scope.load();

			// watch for new data from the server
			socketio.on('notify', function(data){
				addMessage(data);
			});

		})();
		
	}
]);