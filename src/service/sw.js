const CACHE_NAME = "app-cache-v1";
const ASSETS_TO_CACHE = [
  "./", // index.html
  "./manifest.json",
  "./favicon.svg",
  // Dynamic caching of all assets in /assets
];

// Install event → pre-cache known assets
self.addEventListener("install", (event) => {
  console.log("Service Worker installing...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate event → cleanup old caches
self.addEventListener("activate", (event) => {
  console.log("Service Worker activating...");
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch event → serve cached assets first
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Only cache same-origin requests
  if (url.origin === self.location.origin) {
    if (
      url.pathname.startsWith("/assets/") ||
      url.pathname === "/" ||
      url.pathname.endsWith(".html")
    ) {
      event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
          return (
            cachedResponse ||
            fetch(event.request).then((response) => {
              return caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, response.clone());
                return response;
              });
            })
          );
        })
      );
    }
  }
});
