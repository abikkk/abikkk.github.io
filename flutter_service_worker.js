'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3cc80e5863570dfde13d3f340c7195ba",
"assets/AssetManifest.bin.json": "25ff4ebcb2f9edc33eb4b732a6a1674f",
"assets/AssetManifest.json": "374bd9a65a72aba7711f23b9c2b9b3f8",
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
"assets/assets/images/icons/553-5537619_external-link-icon-clipart.png": "9d3ed9d0b56599985a2acf1be142b36a",
"assets/assets/images/icons/android_studio.png": "746e3908b87152805e64a4647da4f5ec",
"assets/assets/images/icons/apex.png": "70c4bc6b95862928c06b2ff87d8b1921",
"assets/assets/images/icons/bandlab.png": "c4f6827cf304418c4959bfae76a6c73a",
"assets/assets/images/icons/bandlab_white.png": "834b79760f62cc723260dc6406c192dc",
"assets/assets/images/icons/code.png": "49fe28034ef309ab3ddc7008d987c773",
"assets/assets/images/icons/code_white.png": "26d6b0e274641afece9f4e25f5be19e9",
"assets/assets/images/icons/discord.png": "d1435e02f79c09b8e0fc940f8cda77e8",
"assets/assets/images/icons/discord_white.png": "7403e46ad230ad3a390479247e1617ae",
"assets/assets/images/icons/fb.png": "f21b03e7296df72cdace8f768511c2b7",
"assets/assets/images/icons/fb_white.png": "dd07cf3dd7278682a56e0b745409f875",
"assets/assets/images/icons/flutter.png": "d25c90d70ce7910bd4f14caf6e52d35b",
"assets/assets/images/icons/flutter_white.png": "f26f63d7c15de34cacad2bc5519bb006",
"assets/assets/images/icons/github.png": "abd7b59b55d2668a409acf05515c4499",
"assets/assets/images/icons/github_hovered.png": "e14cc81693386da01aff884338b0f0be",
"assets/assets/images/icons/gitlab.png": "754f92fb4e2a819c15b113ea2f3cc47e",
"assets/assets/images/icons/gitlab_hovered.png": "44a3f8f1df04513eb2fde8d5258365d0",
"assets/assets/images/icons/gtav.png": "42fc6c51be3c95c0cad0b553127840ef",
"assets/assets/images/icons/ig.png": "0634a5babf36db50e415356b348e3f30",
"assets/assets/images/icons/ig_white.png": "b6d0be5dc233b2316130a7a60500bb76",
"assets/assets/images/icons/linkd.png": "a073ecdfc08870a4b033b6869c7f48fa",
"assets/assets/images/icons/linkd_white.png": "47d83c6d9bc9de5870e94a8c060b0354",
"assets/assets/images/icons/pubg.png": "c93d13f048c15e99585cbdb000fa8233",
"assets/assets/images/icons/react.png": "3fc6815c654cd2f532db9be202a73e32",
"assets/assets/images/icons/react_white.png": "4a9019d5c2e2487ac7ab1085b9e8be60",
"assets/assets/images/icons/soundcloud.png": "6f4441e17a65ca58a93eaa53e67f127d",
"assets/assets/images/icons/soundcloud_white.png": "ba952bf3145db5e26fe5f00ddb8e2c6c",
"assets/assets/images/icons/twitch.png": "72c8f3cd8fb2850b6e02b9307eff61fc",
"assets/assets/images/icons/twitch_white.png": "3ba48fa520eeac4a64342fd3489a46d3",
"assets/assets/images/icons/twitter.png": "72eca29e8b046eff6ccab3d45ba7b75b",
"assets/assets/images/icons/twitter_white.png": "f47885af87706c75ba87eba41342ad90",
"assets/assets/images/icons/upwork.png": "024df5dae4fc0c82781d24777b3f3517",
"assets/assets/images/icons/upwork_white.png": "c8ff411a750dd35a3bfe87f87737eb22",
"assets/assets/images/icons/valorant.png": "bd64791ee56fba385d8b68ffa9c66c2c",
"assets/assets/images/icons/vscode.png": "0261db2fe867bd10fa2491abb95bbae0",
"assets/assets/images/icons/vue.png": "a2cf2ae2db87b9b9b362217e0d06056f",
"assets/assets/images/icons/vue_white.png": "03df16b6ee489c733b1a13d6622c927f",
"assets/assets/images/icons/yt.png": "c2591eb3c80cdd750c2620fc5d11afe8",
"assets/assets/images/icons/yt_white.png": "d2cec3434a217730aa4656d58b51cbed",
"assets/assets/images/logo/abik-vaidhya-logo-zip-file.zip": "c20bcafee982c04bbafba292bf54c7a1",
"assets/assets/images/logo/av%2520icon.png": "5b58bc9ecf715709f0c0639183b2d569",
"assets/assets/images/logo/black_bg.png": "699849ae476fb095f0445f2aff892560",
"assets/assets/images/logo/black_transparent.png": "5bad26afd41ea1c77d669ba394998ba3",
"assets/assets/images/logo/stick_logo_transparent.png": "a50fed3547ae0fa987d605d3927c2f1c",
"assets/assets/images/logo/stick_logo_transparent_grey.png": "27778b4e6c7674a84121392844c0a975",
"assets/assets/images/logo/white_bg.png": "bcd9b0bca3ad4d01ca06505363f87fa3",
"assets/assets/images/logo/white_transparent.png": "c7d0f19ea81ba76ae04da4653e78caa4",
"assets/assets/images/logo/white_transparent_grey.png": "345b7a3a11e9d2bb4bbcd1e6af0ed979",
"assets/assets/images/patterns.jpg": "80b0a26a8e9e60f3e63a465fb78d63d3",
"assets/assets/images/profile.jpg": "a4ce59534ee640123c04c3cbdd8f0c8f",
"assets/assets/images/profile_1.JPG": "83cb80510b659521bf4524f23404bcdf",
"assets/assets/images/profile_2.JPG": "2d69dda99f0dcf3c63eb5feabc0a49c9",
"assets/assets/images/profile_shot.png": "eb3dcdea884f0ee72593b09f8edcec94",
"assets/assets/images/projects/alabbar_enterprises_logo.jpg": "bb691c6964a64823bb91d3345bb971ee",
"assets/assets/images/projects/brandhouse_logo.jpg": "9a8997da256e64b437d0080419b2c49d",
"assets/assets/images/projects/cyprus_duty_free_logo.png": "0b9422e05cc4100e2d115179e79449fa",
"assets/assets/images/projects/ebt_logo.jpeg": "4a153969ee0e1ab0b98f7c5789eb806a",
"assets/assets/images/projects/electronica_logo.jpeg": "736cbda6a8af34f4682d21bd5ead8b17",
"assets/assets/images/projects/fasttrack_logo.png": "07c5845f079df3fd2245b96c8fc358fd",
"assets/assets/images/projects/fullmoon_logo.png": "9545ee163644838befaa757c9f9a6b0d",
"assets/assets/images/projects/hah_logo.png": "be2081a61c2f9c5f09e60b9a8c66491b",
"assets/assets/images/projects/hypercity_logo.jpeg": "cd8ad51f1c5f66072f842d9c0671d656",
"assets/assets/images/projects/ilg_logo.png": "3456e36d5a95ec9fac7ff0a3da17f8ec",
"assets/assets/images/projects/northern_trails.png": "8010b8d7484ecc86c78e32327fd67a68",
"assets/assets/images/projects/northern_trails_logo.png": "c0d71f6c24e9dab7879bf518df52d665",
"assets/assets/images/projects/original_grey_bg.png": "4a999abbed0e0b1648eeb16f4316f3d7",
"assets/assets/images/projects/pfd_cart_screen.jpg": "6028ff0de2bdb5099fb911f8d51add5a",
"assets/assets/images/projects/pfd_logo.png": "2e6d17c10798656c94d20c7156e2d160",
"assets/assets/images/projects/pfd_screen.jpg": "e7222714acff344b57d5f14b0508b749",
"assets/assets/images/projects/tim_hortons_logo.png": "bdfb25ef55932acfdbe4b191038e269b",
"assets/assets/images/projects/vansales_logo.png": "3cc53cccdec88d9c807b3d98fbc91d8a",
"assets/assets/images/projects/weather_app.png": "059cd0571056a8985b6762b8ac28435a",
"assets/assets/images/projects/wholisticminds_logo.png": "510bd51ece45c383b25ca8aea821fe66",
"assets/assets/images/whiteLinesBG.jpg": "714e0e580d3acb194ac3f4221eae9e91",
"assets/FontManifest.json": "abeefb1a9ab69942a14bdaa020963586",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "9b560eaf9359cbf5a628f2b679c9df0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "3eefe909f0326dc11ad9083a2336a3b9",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "20f21e16fd20ef4f406c9cbe8892c562",
"icons/Icon-192.png": "26b3acb6ab7cebed6f29676198037e1a",
"icons/Icon-512.png": "fb95669b45dacba627c54aa1977acea6",
"icons/Icon-maskable-192.png": "26b3acb6ab7cebed6f29676198037e1a",
"icons/Icon-maskable-512.png": "fb95669b45dacba627c54aa1977acea6",
"index.html": "313b193cb8d87ae9aa233ce74e510d22",
"/": "313b193cb8d87ae9aa233ce74e510d22",
"main.dart.js": "ab0360f19b38a99b62e88fe9afe7a061",
"manifest.json": "39ff035dc04491caca01538c4a0c6bef",
"splash/img/dark-1x.png": "422d3256837ae54ea9cdfd5eebcaaf25",
"splash/img/dark-2x.png": "116b05d013ef3127004a6ea5d1139391",
"splash/img/dark-3x.png": "4aedc5e7095a458b16a2f1cf02f771d2",
"splash/img/dark-4x.png": "df2dc8a1ebbd5edf2759d7a3f367a304",
"splash/img/light-1x.png": "422d3256837ae54ea9cdfd5eebcaaf25",
"splash/img/light-2x.png": "116b05d013ef3127004a6ea5d1139391",
"splash/img/light-3x.png": "4aedc5e7095a458b16a2f1cf02f771d2",
"splash/img/light-4x.png": "df2dc8a1ebbd5edf2759d7a3f367a304",
"version.json": "b81d59e8f5871c995e24b05028a4c282"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
