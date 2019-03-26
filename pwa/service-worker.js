var cacheName = "cricket";
var filesToCache = ["index.html", "css/style.css"];

self.addEventListener("install", function(e) {
  console.log("Inside service worker install event");
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log("Service worker caching app shell");
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response;
    })
  );
});
