// Moltin class injection and authentication
app.factory('Moltin', ['$rootScope', '$location', 'publicKey', function($rootScope, $location, publicKey) {

	// Start SDK
	let moltin = new Moltin({
		publicId: publicKey,
		notice(type, msg, code) {
			if (code === '404') {
				$rootScope.error = code;
				$location.path('/error');
			} else {
				$rootScope.notices = [];
				type = type === 'error' ? 'danger' : type;
				if (typeof msg === 'string') {
					$rootScope.notices.push({type, msg});
				} else {
					for (let e in msg) {
						let p = msg[e];
						let data = '';
						if (typeof p === 'string') {
							data = p;
						} else {
							for (let k in p) { let v = p[k]; data += v+'<br />'; }
						}
						console.log(data);
						$rootScope.notices.push({type, msg: data});
					}
				}
			}

			return $rootScope.$apply();
		}
	});

	// Authenticate
	return moltin.Authenticate();
}
]);

// Page actions
app.factory('Page', ['$rootScope', '$location', 'Moltin', 'siteName', function($rootScope, $location, Moltin, siteName) {

	// Variables
	$rootScope.siteName = siteName;
	$rootScope.title    = 'Home';
	$rootScope.notices  = [];
	$rootScope.term     = '';
	$rootScope.loader   = {todo: 0, done: 0};
	$rootScope.cache    = {product: {}, category: {}};

	// Clear notices on page change
	$rootScope.$on('$routeChangeStart', (next, current) => $rootScope.notices = []);

	// First item
	let first = obj => obj[Object.keys(obj)[0]];

	return {

		titleSet(newTitle) {
			return $rootScope.title = newTitle;
		},

		currencySet(currency) {
			return Moltin.Currency.Set(currency, data => window.location.reload());
		},

		search(term) {
			return $location.path(`/search/${term}`);
		},

		image: {

			resize(image, h, w, type) {

				if (type == null) { type = 'fit'; }
				return `http://${image.segments.domain}/w${w}/h${h}/${type !== '' ? type+'/' : ''}${image.segments.suffix}`;
			}
		},

		notice: {

			set(type, msg) {
				return $rootScope.notices.push({type, msg});
			},

			dismiss(key) {
				return $rootScope.notices.splice(key, 1);
			}
		},

		loader: {

			set(num) {
				$rootScope.loader = {todo: num, done: 0};

				return setTimeout(() => $rootScope.loader = {todo: 0, done: 0}
				, 3000);
			},

			update() {
				return $rootScope.loader.done++;
			}
		},

		format: {

			category(category) {
				category.image = Object.keys(category.images).length > 0 ? first(category.images) : {url: {http: '/img/no-img.jpg', https: '/img/no-img.jpg'}};

				$rootScope.cache.category[category.slug] = category;

				return category;
			},

			collection(collection) {
				collection.image = Object.keys(collection.images).length > 0 ? first(collection.images) : {url: {http: '/img/no-img.jpg', https: '/img/no-img.jpg'}};
				return collection;
			},

			product(product) {
				product.category = first(product.category.data);
				product.image    = Object.keys(product.images).length > 0 ? first(product.images) : {url: {http: '/img/no-img.jpg', https: '/img/no-img.jpg'}};

				$rootScope.cache.product[product.slug] = product;

				return product;
			}
		}

	};
}
]);
