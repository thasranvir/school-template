self.addEventListener('install', function () {
	self.skipWaiting();
});
self.addEventListener('activate', function (event) {
	event.waitUntil(self.clients.claim());
});
// This template intentionally does not cache. Add a caching strategy if needed.
