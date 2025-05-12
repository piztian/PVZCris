self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open("pvz-static").then((cache) => {
            return cache.addAll([
                "/",
                "/game/iframe.html",
                "/css/styles.css",
                "/js/main.js",
                "/img/192x192.png",
                "/img/512x512.png"
            ]);
        })
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
