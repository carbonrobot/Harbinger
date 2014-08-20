'use strict';

angular.module('core').factory('messageService', ['$resource',
	function($resource) {
		return $resource('messages');
	}
]);