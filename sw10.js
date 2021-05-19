
// Choose a cache name
const cacheName = 'cache-v1';
// List the files to precache
const precacheResources = [
'/', 
'index.html',
'physics.html',
'biology.html',
'math.html',
'chemistry.html',
'about.html'
];

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener('install', (event) => {
    
 
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activate event!');
});

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network

