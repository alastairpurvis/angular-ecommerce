//////////////////////////
//// MOLTIN RUN ////
//////////////////////////

app.run(['$rootScope', 'Moltin', 'Page', function($rootScope, Moltin, Page) {

	// Variables
	$rootScope.currency = Moltin.options.currency !== false ? Moltin.options.currency : 'GBP';
	$rootScope.pages    = {};
	$rootScope.Page     = Page;

	// Set base loader
	Page.loader.set(3);

	// Make categories global
	Moltin.Category.Tree({status: 1}, function(categories) {

		// Assign data
		$rootScope.categories = categories;
		Page.loader.update();
		return $rootScope.$apply();
	});

	// Make cart global
	Moltin.Cart.Contents(function(cart) {

		// Format products
		for (let k in cart.contents) {
			let v = cart.contents[k];
			cart.contents[k] = Page.format.product(v);
		}

		// Assign data
		$rootScope.cart = cart;
		Page.loader.update();
		return $rootScope.$apply();
	});

	// Make pages global
	Moltin.Entry.List('page', null, function(pages) {

		// Format data
		for (let k in pages) {
			let v = pages[k];
			$rootScope.pages[v.slug] = v;
		}

		// Assign data
		Page.loader.update();
		return $rootScope.$apply();
	});

	return null;
}
]);
