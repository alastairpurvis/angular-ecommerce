//////////////////////////
//// PAYMENT ////
//////////////////////////

app.controller('paymentController', ['$scope', '$routeParams', '$rootScope', '$location', 'Moltin', 'Page', function($scope, $routeParams, $rootScope, $location, Moltin, Page) {

	// Check order
	if ((typeof $scope.order === 'undefined') || ($scope.order.id < 0)) {
		$location.path('/checkout');
	}

	console.log($scope.order);

	// Page setup
	Page.titleSet('Payment');
	$scope.data = {number: '4242 4242 4242 4242', expiry_month: '05', expiry_year: '2015', start_month: '04', start_year: '2014', cvv: '123'};

	// Take payment
	$scope.payment = data =>

		Moltin.Checkout.Payment('purchase', $scope.order.id, {data: $scope.data}, function(response) {

			delete $rootScope.order;

			$rootScope.payment = response;
			return $rootScope.$apply(() => $location.path('/checkout/complete'));
		})
	;

	return null;
}
]);
