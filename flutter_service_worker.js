'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "splash/img/light-4x.png": "9d51dcbe6636a90b8e3ea879a1a4ecb8",
"splash/img/dark-4x.png": "9d51dcbe6636a90b8e3ea879a1a4ecb8",
"splash/img/dark-1x.png": "d52981d592e42dde7681fa7edd485025",
"splash/img/light-3x.png": "0295769be3d88ea4816202f81bb550de",
"splash/img/dark-2x.png": "8783823f71648df0398258165ed0f89a",
"splash/img/light-2x.png": "8783823f71648df0398258165ed0f89a",
"splash/img/dark-3x.png": "0295769be3d88ea4816202f81bb550de",
"splash/img/light-1x.png": "7d1c425a8dbc1cd7e8367b47fb346713",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "a475ea2712e1d2e823cce293984d17cd",
"main.dart.js": "fa9adb7ec93731d6765e546432184537",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"manifest.json": "3d207c80129d9c56e05666c72b4a3ae2",
"icons/maskable_icon_x48.png": "b9f3f9b420c6836efa2c9ac4dd0c3f34",
"icons/monochrome_icon_x72.png": "8f1ca974aadfea0b34b94e113cb04597",
"icons/monochrome_icon_x96.png": "8f1ca974aadfea0b34b94e113cb04597",
"icons/maskable_icon_x96.png": "e833f75c2f9c0d2802f443e496b41586",
"icons/monochrome_icon_x32.png": "ca91d9b5fb6bc17b0eb67226e6b9a687",
"icons/icon_x512.png": "0fab1df8bb64f0d49f25db9288409e98",
"icons/maskable_icon_x192.png": "4b0eac2a1e56da1e499e6ff4f270df3c",
"icons/icon_x192.png": "bba0629a57cb637e792cd94c6272b84e",
"icons/monochrome_icon_x48.png": "8f1ca974aadfea0b34b94e113cb04597",
"icons/monochrome_icon_x128.png": "3d2168568809618409abe5f1d8007e44",
"icons/maskable_icon.png": "456d1b0b48ba929db20ae78c9f799223",
"icons/maskable_icon_x512.png": "d0a0f1964c488753c392e874e5e5a841",
"icons/monochrome_icon_x64.png": "fc5094d62565041612719e2015ca3d18",
"icons/maskable_icon_x384.png": "70f31c3f96171ed8f3244e557de84159",
"icons/maskable_icon_x128.png": "80d5d4de99c6f5d4a914d6bfe59ee20a",
"icons/monochrome_icon_x24.png": "b6ac4820cf0b09d32d3a63ace7fee4e8",
"icons/monochrome_icon_x16.png": "8f1ca974aadfea0b34b94e113cb04597",
"icons/maskable_icon_x72.png": "aa323e76048a72ca3f4f9b2ecc6d1ef1",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"assets/AssetManifest.json": "a4d60628bb73df31db773bf3edcae015",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/storybook_flutter/assets/README.md": "fbaed1ae60d80596d99545ef45d72803",
"assets/packages/mdi/fonts/materialdesignicons-webfont.ttf": "3e722fd57a6db80ee119f0e2c230ccff",
"assets/FontManifest.json": "2ee1ba824c53a9a789ecf52dbe725a55",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/instances.json": "1e3c7327339b6eb05f286b6821bf03c0",
"assets/assets/icon.png": "d2ad2e9857f536f6513f243f0ebf50fb",
"assets/assets/icons/twitter.png": "4a93a2283fedcf3cf322626d1d02358a",
"assets/assets/icons/mastodon.png": "ef0b1e7ef3f21fbf2687fd4fde361878",
"assets/assets/icons/misskey.png": "391919b01109e067373dd59f6903f856",
"assets/assets/icons/4.0x/mastodon.png": "358fe10e69215fd7e651e777e7d81700",
"assets/assets/icons/4.0x/misskey.png": "a3aef0d33152a4aabb2fa0ad0c25f722",
"assets/assets/icons/4.0x/pleroma.png": "78a367aaa31973cf637ae1ef46c2619d",
"assets/assets/icons/pleroma.png": "e42f18d80d5ba7dfe059a32862cd9931",
"assets/assets/icons/2.0x/mastodon.png": "99d42c8904c4bc63aec71a815c4cf0d7",
"assets/assets/icons/2.0x/misskey.png": "8aecf022f0f9eb81334c0a7430c256d3",
"assets/assets/icons/2.0x/pleroma.png": "d68faf44e5fcbf434fa350859bcd38f2",
"assets/assets/icons/husky.png": "d8927eb76e4a648b7179b791d3bbaccd",
"assets/assets/icons/3.0x/mastodon.png": "6c083fa9a5e17f7c50654ff819054996",
"assets/assets/icons/3.0x/misskey.png": "631d28594afcf49c190c24e20cc80166",
"assets/assets/icons/3.0x/pleroma.png": "b14729e9d1259f27c959a81684b89ddc",
"assets/assets/credits.json": "1a11d991673cfb597ddae30ecfc1da81",
"assets/assets/fonts/Quicksand-Light.ttf": "188ca708e4cbbbe3837c3d904b8eeb61",
"assets/assets/fonts/Quicksand-Bold.ttf": "0738679df4cf4e566f60343830da7bfa",
"assets/assets/fonts/Quicksand-Regular.ttf": "216d43ee8707910af457af569eda1dec",
"assets/assets/fonts/Quicksand-SemiBold.ttf": "c82b184bf7450e14adccb7b0d6117474",
"assets/assets/fonts/Quicksand-Medium.ttf": "865b25e449878b6b4d1f9e098ff2f510",
"assets/assets/oauth-success.html": "2eae47cadd2aaa96b32d6a46844b969d",
"assets/NOTICES": "8cc2fbe81df0606ea4431bea108c09db",
"index.html": "e19c29f5edf7d3d788e408e6603088ba",
"/": "e19c29f5edf7d3d788e408e6603088ba",
"favicon.png": "4d0f0dd24e16e8faf0f281ac7a6184c7",
"version.json": "3700afb06921be8d2b72a659cfb690cf"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
