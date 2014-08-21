'use strict';

angular.module('core').controller('HomeController', ['$scope', 'messageService', 'socketio',
	function($scope, messageService, socketio) {
		$scope.messages = [];

		var find = function(){
			$scope.messages = messageService.query();	
		};		

		var addMessage = function(msg){
			$scope.messages.unshift(msg);
		};
		
		// init
		(function(){

			// preload the message list
			find();

			// watch for new data from the server
			socketio.on('notify', function(data){
				addMessage(data);
			});

		})();
		
	}
]);