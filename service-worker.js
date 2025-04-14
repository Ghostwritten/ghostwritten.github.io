self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v2').then((cache) => { // 将 'v1' 改为 'v2'
            return cache.addAll([
                '/favicon.ico'
            ]);
        })
    );
});