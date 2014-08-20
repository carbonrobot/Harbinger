'use strict';

angular.module('core').directive('level', function(){
	return {
		restrict: 'AE',
		replace: true,
		template: '<span class="label label-msg-{{level|lowercase}} label-mini">{{level|uppercase}}</span>',
		scope: { level: '@value' }
	};
});