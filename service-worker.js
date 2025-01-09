// service-worker.js
self.addEventListener('install', event => {
	event.waitUntil(
		caches.open('business-card-v1').then(cache => {
			return cache.addAll([
				'/',
				'/index.html',
				'/styles.css',
				'/app.js',
				// Add other assets to cache
			])
		})
	)
})

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(response => {
			return response || fetch(event.request)
		})
	)
})
