//////////////////////////
//// PRODUCT ////
//////////////////////////

app.controller('productController', ['$rootScope', '$scope', '$routeParams', 'Moltin', 'Page', function($rootScope, $scope, $routeParams, Moltin, Page) {

	// Variables
	$scope.mods = {};

	// Image zoom
	$scope.switchImage = src => $scope.imageSrc = src;

	// Display product
	$scope.display = function(product) {

		let k, v;
		console.log(product);

		// Page options
		Page.titleSet(product.title);

		// Assign data
		if (typeof product.image === 'undefined') {
			$scope.product = Page.format.product(product);
			Page.loader.update();
		} else {
			$scope.product = product;
		}

		if (!$scope.$$phase) {
			$scope.$apply();
		}

		// Assign modifiers
		if (Object.keys(product.modifiers).length > 0) {
			$scope.modifiers = product.modifiers;
			for (k in product.modifiers) {
				v = product.modifiers[k];
				$scope.mods[k] = 0;
			}
		}

		// Watch modifiers
		$scope.$watch('mods', function(n, o) {

			// Check not empty
			if ((Object.keys(n).length < 1) || (JSON.stringify(n) === JSON.stringify(o))) {
				return false;
			}

			// Variables
			let set    = true;
			let params = {status: 1, modifier: {}};

			// Check all are set
			for (k in n) {
				v = n[k];
				if ((v === '0') || (v === 0)) {
					set = false;
				} else {
					params.modifier[k] = v;
				}
			}

			// Check set
			if (!set) {
				delete params.modifier;
				params.slug = $routeParams.slug;
			}

			// Check cache
			if ((typeof params.modifier === 'undefined') && ($scope.cache.product[$routeParams.slug] !== 'undefined')) {
				$scope.product = $scope.cache.product[$routeParams.slug];
				if (!$scope.$$phase) {
					return $scope.$apply();
				}
			} else {
				return Moltin.Product.Find(params, function(product) {
					$scope.product = Page.format.product(product);
					return $scope.$apply();
				});
			}
		}

		, true);

		// "Related" products
		return Moltin.Product.Search({category: $scope.product.category.id, status: 1, limit: 5}, function(items) {

			let products = [];

			// Format products
			for (k in items) {
				v = items[k];
				if ( (v.id !== $scope.product.id) && (products.length < 4) ) {
					products.push(Page.format.product(v));
				}
			}

			// Assign data
			$scope.products = products;
			if (!$scope.$$phase) {
				return $scope.$apply();
			}
		});
	};

	// Get the product
	if ((Object.keys($scope.cache.product).length > 0) && (typeof $scope.cache.product[$routeParams.slug] !== 'undefined')) {
		$scope.display($scope.cache.product[$routeParams.slug]);
	} else {
		Page.loader.set(1);
		Moltin.Product.Find({slug: $routeParams.slug, status: 1}, $scope.display);
	}

	return null;
}
]);
