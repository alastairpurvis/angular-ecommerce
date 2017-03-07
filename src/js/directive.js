//////////////////////////////
//// DIRECTIVE ////
//////////////////////////////

// Homepage slider
app.directive('slideshow', () =>

	(scope, el, attrs) =>

		$(el).camera({
			imagePath: '/img/slideshow/'})

);

// Card formatting
app.directive('cardFormat', () =>

	(scope, el, attrs) =>

		el.bind('keyup focus blur', function() {
			return $(this).val(function(i, v) {
				v = v.replace(/[^\d]/g, '').match(/.{1,4}/g);
				return ( v ? v.join(' ') : '' ).substr(0, 19);
			});
		})

);

// Cart insertion
app.directive('cartInsert', ['$rootScope', 'Moltin', 'Page', ($rootScope, Moltin, Page) =>

	(scope, el, attrs) =>

		el.bind('click', function() {

			// Variables
			let id  = attrs.ngId; // Product ID
			let qty = 1;          // Quantity to insert
			let mod = {};         // Modifiers
			let ex  = false;      // Exit?

			// Quantity
			if (typeof attrs.ngQty !== 'undefined') {

				if (isNaN(attrs.ngQty)) {
					qty = $(attrs.ngQty).val() > 0 ? $(attrs.ngQty).val() : 1;
				} else {
					qty = attrs.ngQty;
				}
			}

			// Modifiers
			if (typeof attrs.ngMod !== 'undefined') {

				// Clear notices
				$rootScope.notices = [];

				// Loop modifier selects
				$(attrs.ngMod+' select').each(function() {

					// Check values
					if ($(this).val() <= 0) {
						Page.notice.set('warning', `Please select a ${$(this).attr('title')} option before adding to cart`);
						ex = true;
						return null;
					}

					// Add to data
					return mod[$(this).attr('ng-mod')] = $(this).val();
				});
			}

			// Check for errors
			if (ex) {
				return null;
			}

			// Add to cart
			return Moltin.Cart.Insert(id, qty, mod, response =>

				// Get updated contents
				Moltin.Cart.Contents(function(cart) {

					// Format products
					for (let k in cart.contents) {
						let v = cart.contents[k];
						cart.contents[k] = Page.format.product(v);
					}

					// Animate
					$("html, body").animate({ scrollTop: 0 }, 150);
					$('.navbar-right > .cart').addClass('added');
					setTimeout(() => $('.navbar-right > .cart').removeClass('added')
					, 1000);

					// Apply data
					$rootScope.cart = cart;
					return $rootScope.$apply();
				})
			);
		})


]);

// Cart update and removal
app.directive('cartQty', ['$rootScope', 'Moltin', 'Page', ($rootScope, Moltin, Page) =>

	(scope, el, attrs) =>

		el.bind('click', function() {

			// Variables
			let id  = attrs.ngId; // Product ID
			let qty = 1;          // Quantity to update

			// Quantity
			if (typeof attrs.ngQty !== 'undefined') {

				if (isNaN(attrs.ngQty)) {
					qty = $(attrs.ngQty).val() > 0 ? $(attrs.ngQty).val() : 1;
				} else {
					qty = attrs.ngQty;
				}
			}

			// Add to cart
			return Moltin.Cart.Update(id, {quantity: qty}, response =>

				// Get updated contents
				Moltin.Cart.Contents(function(cart) {

					// Format products
					for (let k in cart.contents) {
						let v = cart.contents[k];
						cart.contents[k] = Page.format.product(v);
					}

					// Apply data
					$rootScope.cart = cart;
					return $rootScope.$apply();
				})
			);
		})


]);
