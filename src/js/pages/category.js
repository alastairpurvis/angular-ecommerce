////////////////////////////
//// CATEGORY ////
////////////////////////////

app.controller('categoryController', ['$scope', '$routeParams', 'Moltin', 'Page', function($scope, $routeParams, Moltin, Page) {

	// Variables
	$scope.pageCurrent = 0;
	$scope.pagination  = {total: 0, limit: 12, offset: 0};
	Page.loader.set(2);

	// Page change
	$scope.$watch('pageCurrent', function(n, o) {

		if ($scope.category) {
			Page.loader.set(1);
			return $scope.pageChange(n);
		}
	});

	// Pagination change
	$scope.pageChange = function(page) {

		// Change offset
		$scope.pagination.offset = page > 1 ? ( page - 1 ) * $scope.pagination.limit : 0;

		// Get products
		return Moltin.Product.List({category: $scope.category.id, status: 1, limit: $scope.pagination.limit, offset: $scope.pagination.offset}, function(products, pagination) {

			// Check products
			if (products.length <= 0) {
				Page.notice.set('info', `No products found in "${$scope.category.title}"`);

			// Format products
			} else {
				for (let k in products) {
					let v = products[k];
					products[k] = Page.format.product(v);
				}
			}

			// Assign data
			$scope.products   = products;
			$scope.pagination = pagination;
			Page.loader.update();
			return $scope.$apply();
		});
	};

	// Get the category
	Moltin.Category.Find({slug: $routeParams.slug, status: 1}, function(category) {

		// Page options
		Page.titleSet(category.title);

		// Assign data
		$scope.category = category;
		Page.loader.update();
		$scope.$apply();
		return $scope.pageChange(1);
	});

	return null;
}
]);
