////////////////////////////
//// CHECKOUT ////
////////////////////////////

app.controller('checkoutController', ['$scope', '$routeParams', '$rootScope', '$location', 'Moltin', 'Page', function($scope, $routeParams, $rootScope, $location, Moltin, Page) {

	// Page setup
	Page.titleSet('Checkout');
	$scope.customer = 919;
	$scope.data     = {bill: {}, ship: {}, ship_bill: 0, notes: '', shipping: '', gateway: ''};
	Page.loader.set(2);

	// Create order
	$scope.createOrder = function(data) {

		// Format
		$scope.data.bill.customer = $scope.customer;
		$scope.data.ship.customer = $scope.customer;

		console.log($scope.data);

		// Create order
		return Moltin.Cart.Complete({
			customer: $scope.customer,
			gateway: $scope.data.gateway,
			shipping: $scope.data.shipping,
			bill_to: $scope.data.bill,
			ship_to: $scope.data.ship_bill ? 'bill_to' : $scope.data.ship
		}
		, function(response) {

			$rootScope.order = response;

			$rootScope.$apply(() => $location.path('/checkout/payment'));

			return null;
		});
	};

	// Get checkout options
	Moltin.Cart.Checkout(function(options) {

		// Assign data
		$scope.options = options;
		Page.loader.update();
		return $scope.$apply();
	});

	// Get address fields
	Moltin.Address.Fields($scope.customer, 0, function(fields) {

		// Assign data
		$scope.fields = fields;
		Page.loader.update();
		return $scope.$apply();
	});

	return null;
}
]);
