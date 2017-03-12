////////////////////////////
//// HOMEPAGE ////
////////////////////////////

app.controller('homeController', ['$scope', '$route', 'Moltin', 'Page', function($scope, $route, Moltin, Page) {

	// Page options
	Page.titleSet('Home');
	Page.loader.set(3);

	// Get featured products
	Moltin.Product.Search({featured: 1, status: 1, limit: 9}, function(products) {

		// Format products
		for (let k in products) {
			let v = products[k];
			products[k] = Page.format.product(v);
		}

		// Assign data
		$scope.products = products;
		Page.loader.update();
		return $scope.$apply();
	});

	// Get collections
	Moltin.Collection.List({status: 1, limit: 10}, function(collections) {

		// Assign data
		$scope.collections = collections;
		Page.loader.update();
		return $scope.$apply();
	});

	// Get available currencies
	Moltin.Currency.List({enabled: '1'}, function(currencies) {

		// Assign data
		$scope.currencies = currencies;
		Page.loader.update();
		return $scope.$apply();
	});

	return null;
}
]);
