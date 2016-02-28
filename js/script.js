var app = angular.module('ContactsApp', [
	'ngResource',
	'infinite-scroll',
	'angularSpinner',
	'jcs-autoValidate',
	'angular-ladda',
	'mgcrea.ngStrap',
	'toaster',
	'ngAnimate',
	'ui.router'
]);

app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('list', {
			url: "/",
			views: {
				'main': {
					templateUrl: 'templates/list.html',
					controller: 'PersonListController'
				},
				'search': {
					templateUrl: 'templates/searchform.html',
					controller: 'PersonListController'
				}
			}
		})
		.state('edit', {
			url: "/edit/:email",
			views: {
				'main': {
					templateUrl: 'templates/edit.html',
					controller: 'PersonDetailController'
				}
			}
		})
		.state('create', {
			url: "/create",
			views: {
				'main': {
					templateUrl: 'templates/edit.html',
					controller: 'PersonCreateController'
				}
			}
		});

	$urlRouterProvider.otherwise('/');
});

app.config(function ($httpProvider, $resourceProvider, laddaProvider, $datepickerProvider) {
	$httpProvider.defaults.headers.common['Authorization'] = 'Token 1300aae9ada707199c58a5ca6c7d2e948298d00c';
	$resourceProvider.defaults.stripTrailingSlashes = false;
	laddaProvider.setOption({
		style: 'expand-right'
	});
	angular.extend($datepickerProvider.defaults, {
		dateFormat: 'M/d/yyyy',
		autoclose: true
	});
});

app.filter('defaultImage', function () {
	return function (input, param) {
		if (!input) {
			return param
		}
		return input;
	}
});

app.factory("Contact", function ($resource) {
	return $resource("https://codecraftpro.com/api/samples/v1/contact/:id/", {id: '@id'}, {
		update: {
			method: 'PUT'
		}
	});
});