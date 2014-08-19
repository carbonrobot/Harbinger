'use strict';

angular.module('core').factory('Messages', ['$resource',
	function($resource) {
		return $resource('messages');

	}
]);