//////////////////////////////////
//// COLLECTIONS ////
//////////////////////////////////

app.controller('collectionsController', ['$scope', 'Moltin', 'Page', function($scope, Moltin, Page) {

	// Page options
	Page.titleSet('Collections');
	Page.loader.set(1);

	// Get the product
	Moltin.Collection.List({status: 1, limit: 9}, function(collections, pagination) {

		// Format collections
		for (let k in collections) {
			let v = collections[k];
			collections[k] = Page.format.collection(v);
		}

		// Assign data
		$scope.collections = collections;
		Page.loader.update();
		return $scope.$apply();
	});

	return null;
}
]);
