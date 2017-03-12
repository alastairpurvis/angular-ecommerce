////////////////////
//// PAGE ////
////////////////////

app.controller('pageController', ['$scope', '$routeParams', '$location', 'Page', function($scope, $routeParams, $location, Page) {

	// Page change
	$scope.$watchCollection('pages', function() {

		// Get page contents
		if (typeof $scope.pages[$routeParams.page] !== 'undefined') {

			// Page setup
			let page = $scope.pages[$routeParams.page];
			Page.titleSet(page.title);

			// Assign data
			$scope.content = page;

			if (!$scope.$$phase) {
				return $scope.$apply();
			}

		} else if (Object.keys($scope.pages).length > 0) {
			return $location.path('/error');
		}
	});

	return null;
}
]);
