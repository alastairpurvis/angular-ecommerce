////////////////////////
//// SEARCH ////
////////////////////////

app.controller('searchController', ['$scope', '$routeParams', 'Moltin', 'Page', function($scope, $routeParams, Moltin, Page) {

	// Check for search term
	if (typeof $routeParams.term !== 'undefined') {

		// Page setup
		Page.titleSet(`Search "${$routeParams.term}"`);
		$scope.term   = $routeParams.term;
		$scope.search = $routeParams.term;

		// Search products
		Moltin.Product.Search({title: $scope.search, status: 1, limit: 9}, function(products) {

			// Format products
			for (let k in products) {
				let v = products[k];
				products[k] = Page.format.product(v);
			}

			// Assign data
			$scope.products = products;
			return $scope.$apply();
		});

	} else {

		// Page setup
		Page.titleSet('Search');
	}

	return null;
}
]);
