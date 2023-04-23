const staticCache = "static-dev-page-v5";
const assets = [
    "/",
    "/manifest.json",
    "/index.html",
    "/css/style.css",
    "/js/script.js",
    "/img/contact-sprite.svg",
    "/img/dapixel.jpg",
    "/img/icon-192x192.png",
    "/img/icon-256x256.png",
    "/img/icon-384x384.png",
    "/img/icon-512x512.png",
    "/img/icon.png",
    "/img/modal-sprite.svg",
    "/img/photo.jpg",
    "/img/skills-sprite.svg",
    "/img/tic-tac-toe.jpg",
    "/img/todo-list.jpg",
];

self.addEventListener("install", (installEvent) => {
    const filesUpdate = cache => {
        const stack = [];
        assets.forEach(file => stack.push(
            cache.add(file).catch(_=>console.error(`can't load ${file} to cache`))
        ));
        return Promise.all(stack);
    };

    installEvent.waitUntil(caches.open(staticCache).then(filesUpdate));
});

self.addEventListener("activate", async (e) => {
    let data = await caches.keys();
    await Promise.all(
        data
            .filter((cache_name) => cache_name != staticCache)
            .map((cache_data) => caches.delete(cache_data))
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(caches.match(e.request));
});
