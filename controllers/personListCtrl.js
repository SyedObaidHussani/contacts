app.controller('PersonListController', function ($scope, $modal, ContactService) {

	$scope.search = "";
	$scope.order = "email";
	$scope.contacts = ContactService;

	$scope.loadMore = function () {
		$scope.contacts.loadMore();
	};

});