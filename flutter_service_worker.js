'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2eb06c189c78a0cf37e6b27e421d0fec",
"assets/assets/fonts/AlfaSlabOne-Regular.ttf": "7676beb2b1f19eec709feed096327d21",
"assets/assets/fonts/AmaticSC-Bold.ttf": "8ba765ce9580a3bdae76b59130d0ef8a",
"assets/assets/fonts/AmaticSC-Regular.ttf": "e9a42e339f93a719c17be53c386dbbfb",
"assets/assets/fonts/BalsamiqSans-Bold.ttf": "ed3ff13e6453434370d0d0a9f4ebc734",
"assets/assets/fonts/BalsamiqSans-Italic.ttf": "99e0b3470cea314fa44425673c4f463f",
"assets/assets/fonts/BalsamiqSans-Regular.ttf": "d0e0c9d174a9cec8f1383ebd7bf51b31",
"assets/assets/fonts/Caveat-Bold.ttf": "b5e9fdd33063579d243a1a4c2239b296",
"assets/assets/fonts/Caveat-Medium.ttf": "a33c81836f5a681e2e1877b91885feb9",
"assets/assets/fonts/Caveat-Regular.ttf": "65f9db2d54febfe7b53e56e13d163c49",
"assets/assets/fonts/Caveat-SemiBold.ttf": "1fdd873e17965eff7da58c06aff65050",
"assets/assets/fonts/Comfortaa-Bold.ttf": "9f81d628ecf6c80f7ebf80e1ed455d92",
"assets/assets/fonts/Comfortaa-Light.ttf": "7fc83210bd61acc3ec2d6b92e320dde7",
"assets/assets/fonts/Comfortaa-Medium.ttf": "d2b08213f0984c9ef60eb52794e78794",
"assets/assets/fonts/Comfortaa-Regular.ttf": "31aefe19554b85e0e5c1232daebc158e",
"assets/assets/fonts/Comfortaa-SemiBold.ttf": "2111f43a3fa184866e7033c66683056c",
"assets/assets/fonts/Cookie-Regular.ttf": "1a26c990eb18bc85f1fe12a3416d57cf",
"assets/assets/fonts/GloriaHallelujah-Regular.ttf": "779caa76cbfc027a09b365a1a871a24f",
"assets/assets/fonts/IndieFlower-Regular.ttf": "0841af952c807bdf56455b1addb4c7df",
"assets/assets/fonts/Inter-Bold.ttf": "cef517a165e8157d9f14a0911190948d",
"assets/assets/fonts/Inter-ExtraBold.ttf": "82c8c1cf127220ccd9914e5dc739de28",
"assets/assets/fonts/Inter-ExtraLight.ttf": "819a76705047d6474cb529a319e74bbc",
"assets/assets/fonts/Inter-Light.ttf": "d4be01c95657978131342b1dcf829a45",
"assets/assets/fonts/Inter-Medium.ttf": "1aa99aa25c72307cb7f16fae35e8c9d1",
"assets/assets/fonts/Inter-Regular.ttf": "eba360005eef21ac6807e45dc8422042",
"assets/assets/fonts/Inter-SemiBold.ttf": "3e87064b7567bef4ecd2ba977ce028bc",
"assets/assets/fonts/MeowScript-Regular.ttf": "36ddf73c92b7fef1d970d05512c49678",
"assets/assets/fonts/MontserratAlternates-Bold.ttf": "858597948628fafd5ba6d71a820cf7f6",
"assets/assets/fonts/MontserratAlternates-ExtraBold.ttf": "66e38dda7bea2a9ebb8f85e4b2a99ede",
"assets/assets/fonts/MontserratAlternates-ExtraLight.ttf": "ce3e6591e29aa7808adb6aba6bd24d30",
"assets/assets/fonts/MontserratAlternates-Italic.ttf": "9ad5b4624c9b7b582c8d0705779c9f53",
"assets/assets/fonts/MontserratAlternates-Light.ttf": "9d57f922362adf8bf6e3ad79f01207ff",
"assets/assets/fonts/MontserratAlternates-Medium.ttf": "55b7b1d414ea6d2094b85e3a834e32b8",
"assets/assets/fonts/MontserratAlternates-Regular.ttf": "778e16de3b7bbf4100f31ff4d6307216",
"assets/assets/fonts/MontserratAlternates-SemiBold.ttf": "2e719d5e579b791d74a1c5d84e0b766b",
"assets/assets/fonts/Mulish-Bold.ttf": "029ec80c81f551493bb84d4d9bf75c7a",
"assets/assets/fonts/Mulish-ExtraBold.ttf": "cd707466f8cc15c15a19770147926a41",
"assets/assets/fonts/Mulish-ExtraLight.ttf": "661cf63d62e0ddcacec812163a02dd91",
"assets/assets/fonts/Mulish-Italic.ttf": "02a5e06d81972393f8b45da1678b1497",
"assets/assets/fonts/Mulish-Light.ttf": "17b1e6c0a00188bed8b17d517b6cc28b",
"assets/assets/fonts/Mulish-Medium.ttf": "f38e16a1465771850a9f7b948e16c262",
"assets/assets/fonts/Mulish-Regular.ttf": "2ca06889c8c7c7ae766b1e818d0a06f0",
"assets/assets/fonts/Mulish-SemiBold.ttf": "14da34d564a8942b79c15e2abfe0b8cc",
"assets/assets/fonts/Quicksand-Bold.ttf": "05fcffc56e72bc6889ecea672078dc4f",
"assets/assets/fonts/Quicksand-Medium.ttf": "db0ad2fc713ab72ea682687be4bd1021",
"assets/assets/fonts/Quicksand-Regular.ttf": "6cbafd2cb6e973c96ade779edc39c62a",
"assets/assets/fonts/ReadexPro-Bold.ttf": "ac0c6ea345ee1458a5a494eb5b93339b",
"assets/assets/fonts/ReadexPro-ExtraLight.ttf": "ec1b5639a056b52238253d8d9cb7337e",
"assets/assets/fonts/ReadexPro-Light.ttf": "19163573ef925d255a75332bdb7029a0",
"assets/assets/fonts/ReadexPro-Medium.ttf": "405d71f0833bcd670e4714378bd59bfa",
"assets/assets/fonts/ReadexPro-Regular.ttf": "3e24f02a8927ee17ed6d329ddb0d8de4",
"assets/assets/fonts/RedactedScript-Bold.ttf": "fce9d7ec2c25d1591c41d04dc3babf7d",
"assets/assets/fonts/RedactedScript-Light.ttf": "9de7f38ff60c70c6bf44877a9469d093",
"assets/assets/fonts/RedactedScript-Regular.ttf": "977eb7ce27ad4db8575886f075387d8f",
"assets/assets/fonts/Righteous-Regular.ttf": "77fa00996ecb4104c7880b8749c7c4e0",
"assets/assets/fonts/Shalimar-Regular.ttf": "d659fc51f99b59db3d5f65a667ea2fbb",
"assets/assets/images/background_nun.jpg": "438b0035b2ea1b9afa14867f6c3007f0",
"assets/assets/images/bg-001.jpg": "e4e753f2acf4fd953fb97aa411835dfb",
"assets/assets/images/bg-005.jpg": "96bba6973fd2434e209e3bcb932bace5",
"assets/assets/images/bg-012.jpg": "74b95155ead061cb9fcdd979158152db",
"assets/assets/images/bg-016.jpg": "bf78420b956f06161886bef3edbe5c33",
"assets/assets/images/bg-018.jpg": "3103da4e27e5cb49c249fdb0b468dca5",
"assets/assets/images/bg-022.jpg": "c03b147f3412afca2af3a7d853b60c7a",
"assets/assets/images/bg.jpg": "1f046e01ba0b150c823ce743e19c843b",
"assets/assets/images/header.jpg": "fcd10b3bae36b52bd0c3a83dcc064ed1",
"assets/assets/images/icons/android_studio.png": "746e3908b87152805e64a4647da4f5ec",
"assets/assets/images/icons/apex.png": "70c4bc6b95862928c06b2ff87d8b1921",
"assets/assets/images/icons/bandlab.png": "c4f6827cf304418c4959bfae76a6c73a",
"assets/assets/images/icons/csharp.png": "58c7734d125a5b055499d7ca4ce16999",
"assets/assets/images/icons/discord.png": "d1435e02f79c09b8e0fc940f8cda77e8",
"assets/assets/images/icons/dotnet.png": "c345cf60633658182c3df33e0c1b0933",
"assets/assets/images/icons/fb.png": "f21b03e7296df72cdace8f768511c2b7",
"assets/assets/images/icons/flutter.png": "d25c90d70ce7910bd4f14caf6e52d35b",
"assets/assets/images/icons/github.png": "abd7b59b55d2668a409acf05515c4499",
"assets/assets/images/icons/gitlab.png": "754f92fb4e2a819c15b113ea2f3cc47e",
"assets/assets/images/icons/gtav.png": "42fc6c51be3c95c0cad0b553127840ef",
"assets/assets/images/icons/ig.png": "0634a5babf36db50e415356b348e3f30",
"assets/assets/images/icons/linkd.png": "a073ecdfc08870a4b033b6869c7f48fa",
"assets/assets/images/icons/pubg.png": "c93d13f048c15e99585cbdb000fa8233",
"assets/assets/images/icons/react.png": "3fc6815c654cd2f532db9be202a73e32",
"assets/assets/images/icons/soundcloud.png": "6f4441e17a65ca58a93eaa53e67f127d",
"assets/assets/images/icons/twitch.png": "72c8f3cd8fb2850b6e02b9307eff61fc",
"assets/assets/images/icons/twitter.png": "72eca29e8b046eff6ccab3d45ba7b75b",
"assets/assets/images/icons/valorant.png": "bd64791ee56fba385d8b68ffa9c66c2c",
"assets/assets/images/icons/vscode.png": "0261db2fe867bd10fa2491abb95bbae0",
"assets/assets/images/icons/vue.png": "a2cf2ae2db87b9b9b362217e0d06056f",
"assets/assets/images/icons/yt.png": "c2591eb3c80cdd750c2620fc5d11afe8",
"assets/assets/images/patterns.jpg": "80b0a26a8e9e60f3e63a465fb78d63d3",
"assets/assets/images/profile.jpg": "a4ce59534ee640123c04c3cbdd8f0c8f",
"assets/assets/images/profile_1.JPG": "83cb80510b659521bf4524f23404bcdf",
"assets/assets/images/profile_2.JPG": "2d69dda99f0dcf3c63eb5feabc0a49c9",
"assets/assets/images/profile_shot.png": "eb3dcdea884f0ee72593b09f8edcec94",
"assets/assets/images/projects/northern_trails.png": "8010b8d7484ecc86c78e32327fd67a68",
"assets/assets/images/projects/weather_app.png": "059cd0571056a8985b6762b8ac28435a",
"assets/assets/images/whiteLinesBG.jpg": "714e0e580d3acb194ac3f4221eae9e91",
"assets/FontManifest.json": "abeefb1a9ab69942a14bdaa020963586",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "99ecf335c674558414917de4ae5367d2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "340965689ce4135be561d5c948b8a16d",
"/": "340965689ce4135be561d5c948b8a16d",
"main.dart.js": "1624a89b202119f5a618ce181257bb4e",
"manifest.json": "1082c3f1e96467550009ffb5e6654eb4",
"version.json": "d351ae99551ba008177d734c54348c46"
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
