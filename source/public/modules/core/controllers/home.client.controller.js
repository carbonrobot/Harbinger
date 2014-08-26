'use strict';

angular.module('core').controller('HomeController', ['$scope', '$state', 'messageService', 'socketio',
	function($scope, $state, messageService, socketio) {

		// scope
		$scope.app = $state.params.app;
		$scope.messages = [];
		$scope.load = function _load(){
			var opt = {skip: $scope.messages.length, limit: 100};
			if($scope.app){
				opt.app = $scope.app;
			}
			messageService.query(opt, function(data){
				$scope.messages.push.apply($scope.messages, data);
			});	
		};		

		// adds a message to the scope
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