'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9b818ca9511483c901bed1545384376c",
"index.html": "82e7c78a4f0700866c161fa809a0b2f2",
"/": "82e7c78a4f0700866c161fa809a0b2f2",
"main.dart.js": "5c5859df428e82771381619b0c24025f",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"README.md": "6f8b4dd4699677bc6eedd9f660defc25",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
".git/ORIG_HEAD": "f9083cda75c178b748cc9af819976279",
".git/config": "9e2451533c835b7e94ba4bf29da90675",
".git/objects/0d/e1b34f02fde01f647b2f0e18b4f159e4ee847e": "399f253c82002305d0698371cd1c44c7",
".git/objects/92/40c389e180447e65f46c615cf0dfe3977c2564": "e7d6309044fc0eab7e9f22c47a6ef22c",
".git/objects/92/461ba9d20f71f47b2e9f0267460ba4d4272d34": "d8def3e15e4069c3096bd1059d85af6b",
".git/objects/92/1ff16054ee6f81c635b03f8f3ae7dc0aabb285": "cdf80498a81e79556de13ff3ee56ceb7",
".git/objects/0c/ca5f0c7eb78427be98269c64d9aadd329b39e0": "6299ded2c33980438755f2a2f2f1b8f2",
".git/objects/0c/80415a6c2cddaf847107750da50f9ee9983576": "c088562d0da489018cc075cde9508761",
".git/objects/50/b9778cba30d82c282febebd1dfbbb17581edd3": "94c8efe9d5fd69efaa57371a64beb6da",
".git/objects/68/997ef204f3465002294441d629f896ac0b9c46": "35a9caf36b6f3c2590bfe5d743fc172a",
".git/objects/68/4ebd569fbeb890b1d8d3ce73cfdf3bb4d78022": "5426d825b86be5392670df2e71e30aa0",
".git/objects/57/303e4a5f9945d86db2580bc1d3b5fd7ded9941": "88c83925514cc9e7b14a2e8e2a77b458",
".git/objects/57/a9691a462d306d88b12827c2eb6a24d08e00ac": "709e4d7214069619bbd8611290fd06f6",
".git/objects/57/fe4283d20eff3985d3f4ad99a5afadc9c943db": "91d323779b4466aafc503d958b86fae2",
".git/objects/3b/f29bc949cf52d0814712fd6c76d1a5eb730743": "9f414d6068bfec108687bf8f60dfa376",
".git/objects/6f/cfd2c2ff99c52c5e7fccfc4516d3bbef225a4a": "41e46c4a0b5539c4fb6ece6112509ca9",
".git/objects/6f/7f7293893bccf1079a713e46dd94317047a820": "85c445a1a8c9c3ee1d5739acd90cf779",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/0f43692c8c0d2cf90dca8d0103a01f90232251": "7fe54939f0bcda7fb4fd385b94fd26f6",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/04/c9f25f048ea17df708d7edc00afb0055c58bd0": "0b0927ae71fa4807e5d90ea3c2fbf7ee",
".git/objects/6a/67c08082729c9bc2c76f37cb9fdc597802c990": "b74759b17d3f06994b15772c266d477e",
".git/objects/32/6361d4a1c838851f525bbaf1621ed1ad2a7e69": "47dc37aabcf43d2e37e1413269bd9af7",
".git/objects/32/772a54e2451f2faa06fd187596d253ee15367f": "4c98cb3577990547cf55f679fbd295fb",
".git/objects/35/0c0771e16c1f890a0b81c7fff5a76249a79699": "aae947c18758c063b1dd74356f6e59e3",
".git/objects/69/fff4201312969ff5d7a669d3e8d1ced397f57d": "5560453d2603b0699820a4c29a32fcf3",
".git/objects/69/711422454852e40bc942922ad159956a0db69e": "dba742e5be4fe5858423be20ee8eb97f",
".git/objects/69/141ffbe180434e98b9874796ee3470fa1ada60": "639669b19eb396a00a0f52889bfa3f42",
".git/objects/69/c9a0b426f18d9f1cb3e229c0f95aa235b7b670": "363a969b8e401b957829c74054a47281",
".git/objects/69/2fdbb6f032fcc9e4a7bf0db23258ab62beadc9": "132f0ae9b1db101951e26d20fbbf069c",
".git/objects/69/141b96c8522888d177f6dea284d3a9dafe1e3a": "9728c078d7e09291983a73636afc90c9",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/3c/3a5fea9e42e010b8c1230a9012ab2536232466": "baeaac32c2590553d76977b3537d1cb7",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3d/15ee51805de8769b6632f04097d66f68209d6e": "d12e43e9c3cff3c558d106635945d938",
".git/objects/58/f453584250d9280c736aae1a94f450d4086fdc": "66762c6a94887c9790efa5b585c30d66",
".git/objects/67/9f5202daaaf23f9dbb98a80f6e33580832a916": "2a674fcde74a7b2d1c800604fb17d8a2",
".git/objects/67/e7c7592b5df8c318e3040d4b33db1c4e864a0f": "df3553a1056d59c516fa35cb46315b6c",
".git/objects/0b/0f1d34bd2b750fd01dc4ad65dd1a5afe2981f6": "b139fcda181ad23a641ebe5d0f24ad72",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/32afadbcfa0c931a341226eed11b8a99c0f64e": "4c5e7bc99a60e341dc37bdc6ffd3bb7d",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0e/10b2722dcc130d78e4c25544d2c3662f224d23": "be7d4eba65655f1a9f3601c75d962271",
".git/objects/34/8790cb2ea95610e74f223fa7230b8afeef2c34": "abf1ac09384e1539da9a9dc9189bd820",
".git/objects/5a/a58a1ce04c322f13217c6260210f80876a5835": "d1e16a36fdf54f4c0bb93c2e8f0b6d3c",
".git/objects/5f/8cfcc1207f455cccddedccf5346221061820d1": "1d6f49bdf54d9fb6e9aad2dad60453d9",
".git/objects/5f/f3492905cde26edf31dda60bc53520d10349a0": "82398b6cb47a41058cab046a579d49ac",
".git/objects/33/00d29d62d7d9066887844cf20113011a5f84cb": "15417f4547123349ed3ac0d1264d71bd",
".git/objects/9c/76fc0e89269b6af126ee41aeb1c3014a281b08": "229b3cc1d81f5168b7275f3be97c71df",
".git/objects/a3/416e3a535738bdd867cd91b7d4ea5bfed34c44": "fc1b6bc0fd1023a7e04c1531b0e9689e",
".git/objects/b5/a956765bdfbb7390c7d2be871fc9fd0217276a": "0b4c480e1f54f489465aab79d55c93a9",
".git/objects/b5/772e66c13c35683754c64886d979c5e8e72176": "65d6be508f96825eb7133e4439046aa6",
".git/objects/b5/5d7fdaf5142b81e392fbcd4951752342039782": "7a45bac1e7adaebf176d9a6d64d4d278",
".git/objects/b5/76fb062d126ab916c7b2bf54f1ca0610875304": "05d322546cf18e2d563d5fcf6b8f720e",
".git/objects/b2/0c4aa1dd7d5d1ae83d496b48109f42b7ff7f5a": "8cbfd70f91054e64e689b99b861ba958",
".git/objects/d9/840b183e3a78550870a24e1d16b261b87fe576": "28999dee2a8fdd172097b366a82fb335",
".git/objects/d9/fe056990d3ec67ce7bf49d0a5a998fa3ea8984": "dbb3342dd36d1514b2df1613693be929",
".git/objects/ac/2fe06e6f9b355427ebd722a42f866a23dfc032": "50d04416a3d70675e32b456f41863a7f",
".git/objects/ac/487b27815d0cdc540b6d2d75c96c117348a86a": "5e549a43621eedbf07b010a1675a171e",
".git/objects/ad/d2ff2ef6419700465d212b85a62517249a1931": "00ad1e8ec0059c83d5c8f6f09252fa6d",
".git/objects/ad/7431d336c9310866def33574b0f4b80a6679af": "f42572008c7156c3b18001a04a6aaab6",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/5051b42d96ed392e0bceb9cbe76f04e79e431e": "bd540b684990d2622b070e9564b39a81",
".git/objects/d0/d97d63fc1bcf9bc27667e4679cd6a027ddab18": "f1aab2909b24106e16031a54c8c2e4dd",
".git/objects/d0/c2bd8d9802e246eecbc03ea0d100526cc537b0": "2e6fdc981538c6b21796c80d5fb06518",
".git/objects/b3/3819935179f94aac67ab19a9071348a81b620c": "0f91ce155cf7be20d5288d86cfa9a668",
".git/objects/b3/b5ab4858389487f5e89ef8f0be54ea53e4433c": "093c53f6b1104054e9c698e69a45fc63",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/7e645c908502dc866b1f87175ebb320687e515": "abe863f30d94ac1bb58c28d78720990b",
".git/objects/a5/294f5af161a0e5b55d579f4dd2f546f4d07da1": "fdd2df7a035a6be9140bc70862cd433f",
".git/objects/bd/9ed80bb8fb97971b6ef2ecc4027715ccd533d9": "2cb8539dc22aae142a3b1b9b988d1789",
".git/objects/d1/f297778fdfb7ca5db52fd190a9dd409b988298": "e6a03523866c0d325c6f6aaaa96cadc0",
".git/objects/d1/721bf3d3658069b77ba26ef71c4c0e2b6639a1": "36033a510513c0316405027f46a142a6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/ea284242a68420ce146570eabc8bae77835f91": "469aeb964255505056c5d638f4bbe43a",
".git/objects/bc/f6e7d2934775ef27fe7cf859d84612e07b8c37": "0986d97fc7642d7ceb9d29e0c6ba0839",
".git/objects/bc/0a2b084cf50d0ecae91ebfa05c531d169cf800": "ef65ee245f8e083526ff16201d545bd9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/bfc3b7ceca157a1d0ae477af1ad9d81d99023f": "0e591790ad4dcadf0a9c7efededa701a",
".git/objects/f3/3280f89ec6cdd6a734d6886e2ea4e57222424a": "f2080091f36d414a9335e7bc75ffa632",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7a3fd84c1420601da8bd8ffa55f136077cd21d": "9d75f6614584221ca4c447690177e4bc",
".git/objects/c0/c5fb34e054292b5207c118fdf8e46c11a250b1": "5b9e851184df276c2d49f90fa641cc80",
".git/objects/ee/226900b6178cba7ea0e86370735141779217f8": "5a815cf6c9d7c06825e1867e0cf58329",
".git/objects/ee/788ce0cd2cf3984ac01540efee5970c1075a79": "c6ce2d44af103d696722e7ad10aaa85d",
".git/objects/ee/e39987c926008945a0fc477f80710da9d6e4ff": "d5b938bd2960835c0ed91c18e51ca8a8",
".git/objects/ee/404c9f59a70773453a8f5b4caae4c4ea807a2e": "b01334d082f0560da6b9ee2801c57fc1",
".git/objects/c9/79e389a3496845b42750603754c4954537329e": "f19dee24f8c28f62d741d715cfd31014",
".git/objects/fd/e4b42eae2d761ff6a24a055e87c4bc174a4e1b": "d7001cd14b7a9474318a7e0407495bb0",
".git/objects/fd/9d2278a422178a2ae26b9069f861960beb07b0": "ecef8f4fe54c88117f44c43bf70a92fc",
".git/objects/fd/5f40889b9c1653d144a08fcca87dd3424c5c97": "b5a61cc303319becf25f4b5879284c80",
".git/objects/fd/435fa856e30cbfb8433a94acbfb83885ecd413": "cb883122ad4f7a2b9df63f66a025bf0d",
".git/objects/f2/55832861a7336891e6f005e1b588be32a760e2": "0af1947c550925a5295fa6c8331b3983",
".git/objects/f2/1266b310a578dfa896d1fb8a6760c98de76b54": "603cbc13004965bbe0879b2188e2ce94",
".git/objects/e4/230d8abd6a7003497c390cfd498a6388492e7e": "377b648a65100d742588bb759c368314",
".git/objects/fe/f409f70b08fe870b5ffb754effabd3e2d85de0": "3277ba24b883cae3978a7379b96e7359",
".git/objects/c8/02d23da5c42de0ee4984c5268066302d34bc49": "ef3f04e82ae5136f2d1e8b52759a5a29",
".git/objects/c8/213610b6ea46a5f155c79df377242916ea0def": "1f012a4c122ab6bb50bcf7ba2d211c66",
".git/objects/fb/576e5de30adca49f65daab2a557944042d47c2": "7257c91528220083481a63cedcc15ff4",
".git/objects/fb/da2a0f60f26c3914464109067aa99fe6695db2": "96488f57ac855b2c13bd26dd5e18fca0",
".git/objects/ed/99fe2159275eb20f38273009110372f064ea69": "124a191a261aad119948f849b34dae1d",
".git/objects/ed/79ce4ac5101a1837dc17a280a79ee5397115f5": "4754d2bbe2ab63d3d3d64d42798109a9",
".git/objects/c1/e07b63dc9c089332354786830753e61f1012e4": "a8f819fd242f8a5bdd5db9e7a2ce0f90",
".git/objects/c6/7d13d99f65c77ae329d1eb4f11b0bfebc08ab7": "c78ee73fc8656c7c3d080230da529034",
".git/objects/c6/efdacb48ce6348630ca77bf5b420bcc8cbdde1": "b34ccbf47d793a9c2c1863886cf938e9",
".git/objects/4e/10bc7c77b6167ee06fcfef3ce49aa839d3c252": "80944659ffa2afc9fe123552e0481fa0",
".git/objects/4e/12a09ad8c650b05ab965fb8142496a5565dc24": "e6856d78a33e2ddfd07cf6bd63b5f7ae",
".git/objects/4e/81da7ec53147e986960091d0a2f4f8039118bc": "eeab256b5eac9842a3f953c5ccd44eb1",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/58860408966f85c7d0cd83491ef286c22ce70b": "d8a06421b9c73341d03a1a3503983992",
".git/objects/27/05f124c8a21adf709cb9a336cbadb23e58d0bf": "2503286c311fb0e369fede931e0e34ed",
".git/objects/27/a9c87fb48002e5550d755b7bd2ccf44ca606fb": "4c224cc06a1ae7a3c915219de62c62d5",
".git/objects/4b/12c146b000b40cf927d94dbf088f7c52cd5a00": "d258c69a84d53d4c1c0985c6586a3221",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/pack/pack-34379f67b2bb91484728c944d5c98ee6f7318236.pack": "e6756ec413daebe1e998e3f6c653cc4f",
".git/objects/pack/pack-34379f67b2bb91484728c944d5c98ee6f7318236.idx": "b2416d0882bcde99c6fec84b91746c5b",
".git/objects/11/5d2b516d2e7979e745fc636322ecc041db56f3": "e0d277d8fc1974c80a043e725a568fa6",
".git/objects/11/8f8d27d8e1ff2adc9ee9406a96ec80b773da20": "d2e8b33d12c86f1eab660440fb81862f",
".git/objects/11/e9795cf84c89647271d09924ea526d8af3bd04": "9fd5c17c26cdbd956482f248dea19937",
".git/objects/11/0f709a5aa4749482cc734cf6933ea9ddb08202": "0e17a70b9429dc1d75627acc791ad06e",
".git/objects/7d/b67cd64f9aec46217fab868520c7004e3f5d58": "1281072753f6a858293fe8ad36aa0c50",
".git/objects/29/4ad7e1cb043b20c96bbf2f383a1dada0df68ef": "c69c84466d09ef7aa2709a8889ea5d78",
".git/objects/16/6a3da5e1991fa68f458cf5d397785538f034e4": "b1afb1fa8e91951fb83ffdf42204e91e",
".git/objects/42/58e7f08f3d6ffcd53b993999bdd18d395e2d4f": "1cd4c2e90c08e2ac8ad2d3ef71b51f18",
".git/objects/45/3fc945e4bd4e3a59b7a516a81e3925ebb3838a": "c7c3ab95c8b1d986240a0248c93cf891",
".git/objects/45/f43713a2a25b6466275a7170541df494b06fe1": "fc682786ca4ad54d221d05eab524f69c",
".git/objects/1f/c6bfff83b8470c0ec8ed33b5dcc8de54b76b43": "5485baea8b5bcc9a1097e2fa9e89476a",
".git/objects/1f/23fb9b86b2d1757bde8caae65e6786b0b875da": "d78e377f7488fbebbc2bacc53e547588",
".git/objects/87/b9c80694b28e9359c678056c5653fbb9f2443f": "24563f0febc5521dd3ef7dde9600d86c",
".git/objects/74/d2917aad94e01d6b6736d86ae77440014c6a6e": "ab0d325e7b264e3879124404cfb691f8",
".git/objects/74/6d57cc4d7ed450aba035048c621b8b3939368f": "3f9fd3c8e55f4382ee145820b58ae752",
".git/objects/28/7aa7268b7e1435f6720abb63fb57666236a20b": "dca682df68116a28c8defe97f16a9b08",
".git/objects/28/dc7f13917db66ede3fab1fb13fb5a1c4d5843b": "db59f21a8a110cd6a20e241c3d81b14c",
".git/objects/28/5aa4ab7d9160eb310112dc5708ec2070e03144": "0283158e28a25d2d597c25c669884e9d",
".git/objects/17/0de6a19fff87b357e3036d86095dfb4204d835": "ab6e5d0eab563e6db010763f4ed74d26",
".git/objects/17/d0bc373e5a86ae3b9e0f48f62ca822203758c1": "264b16c5b67b9748a6063e9e23d518cc",
".git/objects/17/8e6ffe4b3cb4443a7d3e27b378bd6a3021bd91": "1bb94602fc33d42859dad5d8568ba0e5",
".git/objects/7b/e771d08e5c2d33c9fec10b7694b2da9d4ab444": "99c217bd0fd8745ac263b1bc927c94b7",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8f/1cff0f93ce6ce60f86bdefaab827e7d401b8b1": "ac056a2ca0c02d6d57bb40ce0ffe56d8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/07605cd97f3f46ccfbe7709a1366dc44dec056": "1dbc161df55a6cc10e429fd9f8369eaf",
".git/objects/10/c39a0e50f14f985f20a23ba91d5ecbc464c5c2": "f02fc848b33193ef81481fc7a388c670",
".git/objects/10/83ca5c62db6b525107aa9335e0ffd8b88c2309": "45f0e85ad3e7335278d7198f767f2d37",
".git/objects/19/6586a071e08c1e90f9b2fce5bb6ab29c43bd27": "d1439d1232dfc299034d598dc7242f5b",
".git/objects/19/8f5499a95a0c2e87c1993a821e1c352006de24": "ae664f332279b148fc63d56d7555375a",
".git/objects/26/586c983c1333ce749dc5e6eede572d95f21299": "ee1ef3860e8c14ef94b749fccf38a0ee",
".git/objects/26/9fd39f6c3027fdd86615cdd0b5f447912e5faa": "118406af7d35c7fdbd43aa302369b922",
".git/objects/26/96f4a05f2cfcdf50812c7743d3006549742743": "1fc44ab911065c168747b6bee6007ee6",
".git/objects/26/86c5ff372f5388277ce7e4ed28225849ebbc4b": "62522a91afa0760cf153281cbab36f55",
".git/objects/21/1308223ef4f880b2774944e1b665df76b30f6a": "d7cf891cb4cd1c15bf788425963fbdfc",
".git/objects/4d/46450058e6569a125e027efd8fdec4c39c5415": "fdc7748219bdd95ecd71b1d0c81cdceb",
".git/objects/4d/540cec0e3af363e82f02ac03bdb48f1d9c3802": "84c0c17dca351a6d25145892aa64a3e2",
".git/objects/75/5ddd723711085ca891ef59e60bf20fc6703564": "78d5399f176565be4a5edc936a172c0e",
".git/objects/81/061e9934e97d3985ae78b4811041ccb546abff": "a79bf99d65f7412b9b3a407fee54d63d",
".git/objects/81/91bfe221cf7e6995517f4d02d769e3d1534889": "7def46afe742310d951e5ec35882f050",
".git/objects/81/6c393a903f20e868e14b291d62cbb7c0392f22": "bde279184474418a7e5b317ae442463a",
".git/objects/72/7c3cb721dd33abd674a8f166628de3f7617646": "f9e1694120b51f1cd6c02d79fc667ab7",
".git/objects/72/355045c62ec89654dec4833e1c6058679c6911": "8d5d9dbd2a89e4daca9dc09617e44cf2",
".git/objects/43/076d7adcd3d25ff1bbee6e760ce01e12214cfc": "e588782ba4a0447606a86c4874309740",
".git/objects/43/9e08b0667139b79df4074f2132b1b0a2b8de8c": "dd0d5ea8421eba4b1447b5fc7f3ff809",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/c195c9f1826d8dbee867485595c6a846dbee4b": "0eb351f2f9d4d8774bea1369d2df5ec8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/f23f11df4c05c966cdfb3bae0787fe7352f7b0": "3c77459f13ca2c8a3337fb73e0f14cfe",
".git/objects/9f/36308eb596e2de69f396394187dbf30da8e7e4": "b8416ef70727cd1aaa8f7f27a756e38b",
".git/objects/6b/01cbed018be8805a0b6e5d002a9656ccb2dae5": "1bd7f06d535a34b3ef103a7716abbabf",
".git/objects/38/2016f728ea0283c7adf86c4b51d0c3841730ba": "e28cfa0c742987250ef4f28f785fe43c",
".git/objects/00/dad241f53b45e05e5e30343bb98bc51d767753": "4775f5197855346cf8b090fa9b7d5f62",
".git/objects/00/b5f911bf7d463d2e87636065b3d503174fb684": "0d6c999d9dc7b16ae860c4beffcf62bd",
".git/objects/00/e8b3c2c86ab5a51c27b56db3735d86f3035ed5": "38f985994dd3a1fa6b295d6f3a97afde",
".git/objects/6e/2f7c906a2b291259bf792882e131522c9cc767": "b6d8e7557a69fd083f6bba0651733302",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/09/f85aec8e9f48c833046a49fa6e583814ff257c": "889fe0b085e257036b2de1dbf7e8d9b6",
".git/objects/5d/d401ab419bef0556116b773aa663bd35f5135b": "5fcada3aa69edd6de746a703365e6378",
".git/objects/5d/be123bf42d3509b9d24e6f135d79a1bf652a4c": "6e48b80ec556d898837ff651851226bc",
".git/objects/31/a99c54d4721a9949e9ef84ac416085bc0783b8": "7f576e5276bd37e68daa5a6282111cdc",
".git/objects/31/dd095748570465e1bfd93d651ad04944865784": "534d8fb47b46d7b926ceca035658ee7a",
".git/objects/91/8ff5013a734ee806a002906ceb81941ffacde6": "b11989aa3a884a43abd979e1d0b0f779",
".git/objects/96/becfb50fc24e95f981a06e6d7274c0f78195e9": "7fdf4ab636a3af8e84f9d83ccfef5087",
".git/objects/96/a70be0d46f95e5720f5ed97b9b50ce06747834": "cd7d249859aa22240f8ac0e535e2c60e",
".git/objects/54/77553daf0dbebe52bbf4262f8231c96018735b": "92a6766d1c20b7fc89929e97d6a3db40",
".git/objects/54/c9d8938bbc85dc2a4642c73bf6bde1116faff0": "949953ef909631ec33d2eefa91e953f3",
".git/objects/98/aa9846357e50616c74e42852b3fb2ea5211b1d": "eb5eaabc241f600cb58717323614da59",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/b22be46ad86171515bb039eabf570335746a22": "101d84c783e1c2b46c94e10dc1c1eda7",
".git/objects/30/4b887b2ab0cc36e1a9a033b3fcd77af33da556": "cf380209f78caf2958c70b0a32c29996",
".git/objects/30/83a1c439f34f9a518e998b4b4dc2adcf8da463": "4975e1943a32b61fdb5fdc4641e25528",
".git/objects/30/4f55122a7e6070391898e36e351a6a3d226a2f": "4db4e8a860efb9ed674aac18d5dec4c7",
".git/objects/37/9dfe1e394094669cfe9276bf6d24de2014b164": "6648eabdf4ead50c215b85953189e9c1",
".git/objects/08/ae66d67d7985395e287043d086ff870c53dd8e": "ea268b98df56342237f81fad6540968e",
".git/objects/01/409408e73cb75d2f397cb1c20c7c179332080b": "f0522c9249456ee4a95fa41f262157b9",
".git/objects/06/1e7b8d3d01e6ae33b301c1198c5f05b11eb96d": "25c807c1fd79d624fca9fc57d3c50a9a",
".git/objects/06/aa2be1b1306ec9436f67efb7ea17fcc3eb89d7": "e6da124ef00531a0379c74eb22b01db2",
".git/objects/6c/05c9197dcc700c01e50ce4fdaa613559efd2d2": "30b97fbd25466f5c35f751d1d38944e3",
".git/objects/6c/174c8433f12f26d98031b21940500f2014e883": "e3247febb40d24352d34b26476d16ab6",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/39/fbdc44e2f63a6098352b84bfc36c5ae9b5d874": "e9c55873090ba930b3096cf110dace72",
".git/objects/99/45ca3b17a772cc7f54ff346b8c9a844794e9de": "cd0f3ebe93e280b97e768d9a9864fcc8",
".git/objects/99/5617772b3dee8190df558e20c928560f39b3f8": "dd1d9ff2bf4f00e30bba0b6dd9bc54ed",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/97/b6eee463de5e4fcf79c6570e4173f50eca81d5": "b58977ec52e0607f13c5710fd432ef21",
".git/objects/97/e2025e1bfc6a9e095c4a7fe9ae2be09ed7b43d": "425e50140e275befe6d883867d0b9669",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/bf/50a0f97e613c0942b61588f06e658a031a7587": "fcaad4281cb93914825687d9f8e52e9a",
".git/objects/bf/5840ef65548206ee4de88c5a89b94fe5b2081b": "9c492efa987ba579d111eb90b0113f3d",
".git/objects/d3/464590a5c52c87d28ac7b0a36662b02e7cf7a8": "113f5404e5ab0b1bc007c2b03a53b105",
".git/objects/d4/301a46c3222fc6b48fa4841f7def2a3d8e1b29": "139ce2b0e6a1c0695c20a6dd67e89afb",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/6de8ab896511d7dafb9967fcfc575eca2adaae": "e0a4182985a17280f53171828b79541f",
".git/objects/ba/f4e4c513bc4166074dafac35a6cf0e835f007f": "cb71994e62d78904acf6bca5bb23eff6",
".git/objects/b8/8561246a416ec78218e1e789bfd2cfbd929072": "9c38762f32f99fd038bd4a1183515f38",
".git/objects/b8/fbf278ce6b42cd992be72f7adf395b203107df": "db7c68fd9389c3962c54625ece81cc65",
".git/objects/b8/1e1f8c695c6c1e87abe9c92f8a2e7bf1f71d9e": "23d445690a9271848d036b9016ae6351",
".git/objects/b1/53a22ef00c9e50f60d1ec4867d07b24d60c0e8": "fff3acc75763afbbb1efa989d0397268",
".git/objects/b1/a5a18eb1e210c9cbb7aecaf7e4a3b517aea1ce": "c3de54f890fa78730569e26293c3361e",
".git/objects/a9/292f7aaef74cac30012efeb3a948e74b627cff": "49506bd4342d8ef68f37b40d8e88eca4",
".git/objects/a9/18af8eb53a56906b21d8ac072aa85bfaad0434": "e5fb9fa3ec345c8a7866444baa865045",
".git/objects/d2/b4149344b0f15b95e17420e60ad78cc2a668d7": "0fc1cd5b26638699ca2bd352c10af6aa",
".git/objects/aa/ab8e47253407ce902a371712e22f0c6f97543a": "a8c2ffb96f7d59b60601d1b9e2d1859a",
".git/objects/b7/851a3df51f2ea94ee08b0fda516e9326db8588": "77cbf58e0130ebca06714fad97b923de",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/3f7fe26035eef638cbd739f6103e804e8effb2": "5e9cf0eaccca43e09683a2cfb34beba0",
".git/objects/a8/4bacf313f83ba1790e90c9a2755373813a99c2": "6cfe3fbfbcc21f735d0aa2894076449e",
".git/objects/a8/8b6ca547de98d51cdcd359db4340d2aae4338c": "03fc8c6878a3168d70a59a8142531222",
".git/objects/a8/c60bc7c4daa94a3d2e3914cf2bebeefdc7959e": "611d045f46fb4239997fec430666b902",
".git/objects/de/c9af3b14dbd5b8c9e626c5e0b764b8d0980fde": "b13b5799fbe3b4a7c7673177d1da18b7",
".git/objects/a6/9ab4812f3f52acc921fcec00524aec1ad837c9": "9bdc108e228e5daedffb8b0e26dc5e91",
".git/objects/a6/fc0784fe37351d7f0f635e4206767666b8cb25": "41c973f5c47b4da0296d10b3956dd2f0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/a1/5badea6185c3a4076ad4ffaeebc486b87d2269": "492d619d16a63ee062a826e5ba41fa52",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/8e9dceb6366edcf053c94502f4edb91b9dedeb": "30e36fcff589656a59fc8460a403bf60",
".git/objects/ef/529b10c70faf8d7d5370434bd36adfb0043771": "e6241b7f3566a54bbcf5cbd28369c477",
".git/objects/c4/5da381d32ceac2d1f0ec085c95189f9c0436ba": "1f1f0be6c14563793c72d20e890f760e",
".git/objects/ea/dd29939b4889f3cba87c6dc7f6078b35d50263": "a75fed71577d3e6a280d3b33b11faa06",
".git/objects/ea/9c5c8e26b59910543d2d949996168a3d150582": "8a257710eb7ed07c246991e568d3e1e2",
".git/objects/ea/06199f2c530d6ab6bb98869331df5b36f2a89f": "58343208039f939789ec8a028c590083",
".git/objects/e1/9f9be692198775c948d6a1eb8439fb65a190de": "13e04a9c461f0f218c9d70a19565501b",
".git/objects/cd/94b5ded10ed87b5a37ebb0f1f223ca624778f8": "31d5de4e4c0f512fa9b91ab35c07a436",
".git/objects/cc/670e489bd3fc0f39d8b3b7c7d32234ffdb8b63": "82680621e7e8b47d47bb8e6ab466c946",
".git/objects/cc/9123abee978a40b1773fb7683de41f446e5080": "07532db02706797dac832030fb9c506b",
".git/objects/cc/8e53f1d5e8f4f7a4c88b067794f6fdc2122613": "9f9e9015b5cafe44e4d9910760a36ff4",
".git/objects/e6/847902e545c83e95de89474c1dec1bd638ee7b": "87cf4b3f02e4f21031463390e3d88cbe",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/ad0ee1e2f21cd7a8563d4ee2d8c08f09ad83fa": "b6d8fd71f76b782ff5ffacc6c2ed4415",
".git/objects/ff/5798baffadbc05391b5c13e71292aef2207ad2": "4541023f9fe670d02713c724ea4ec889",
".git/objects/c2/4c67eb3e649fb9f105630c93fe27a7b6c9a69a": "a26eb8065d921f22204739f9b457249e",
".git/objects/c2/ca53f8139a4a77e7da7a1028a984f82c291e2b": "1441a5b4b187addf3afbfd5490f5abf7",
".git/objects/f6/7c6b8d241c11aa693784d96eedd5af01e25ad9": "55b72c7e3069c432a42c757e7c722d01",
".git/objects/f6/d2400395e235dc96d514a92dab7945a0ef20b3": "deedb3b174c321874ab8e634651ead04",
".git/objects/f6/1bbf9f81552c56160d4ba13ed704f3c56c452d": "576723001be8597fec5d523f41069b4e",
".git/objects/e9/07e56500d93b5e10dfb9b3775f925cc69b8528": "e12f4fb74feeb73970fe58c648c5be77",
".git/objects/f1/ae0723d2454061bb28bf9a8a0b8f14e695bf8e": "38ae7a374f886a0acd6938e383cafbad",
".git/objects/e7/89dd103df07551539dd606c5db6dc58ac044a9": "f082b2355958f34276e756983e5566f5",
".git/objects/cb/9b0ce2c8e34f09687fd20c7a96d96b5562d1bd": "0c66721ad1b573a78ff0445b49499463",
".git/objects/f8/32bb7538f0e63ddc62cf5e70af3cfce3b26534": "8c6f1cc26ec7cab22e8943f98bb6077f",
".git/objects/f8/344880a1a8e716cec5f5974e1fde40889c0649": "3204868069b7f62bb4c6b95e16d9d722",
".git/objects/ce/ce22dc836a096bb309e1e8ee44cbb73793faab": "12db1deac88191a43bd3f868eb43720a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/1b03043bc686efe77a9146c0de660a2fb95bbf": "c2492f5a881f73daacda1b8c95d55f02",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/d19504280053f286d82899036a6b451730cfa0": "ca2c4e10134225233f97ebae407a9a69",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/0d390aa6b670ed6252093997751d11997bbf1e": "a6720b08f0540d7296114fa98c79d103",
".git/objects/1b/f662e80d9b344de1921cacf5594e7cb186dd81": "edebae00a794b670c5e02ad63abb8e92",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/1e/398e3016f54ea692e6abfdfa05d6941992e2ca": "65a51d21d01ad794c672761e562d9594",
".git/objects/1e/3764b123d5e6356f4579695936267e4d6b15a4": "526121f8f33c85bab72c591998690b1f",
".git/objects/84/730a3aa66ff0ee5f2b9c823d5bd18998dab426": "57933a65bdd43b91ced5f41e2a34a163",
".git/objects/84/6b148a00bc957bd8c9ae5ce9a7fcab1de55a1b": "ae6708957aacc662bac8351a79f16bf3",
".git/objects/24/c70d23a52ba61e284b723923f6067d2abf7436": "c29db8cd0d16b77368364dbae0c0fb53",
".git/objects/24/7d35de11ea06776f963e7e7c94df09c7ad15a8": "49576fa0becd922620208f340cd1fd9f",
".git/objects/23/313ed3a9d0e464ac29b3aecbbbf1b1a364dac8": "d1f457ffe9ffee16d45d6c28d64563b3",
".git/objects/23/500da5316e634b40f768a7db5b9b6ddc84b0d5": "31028688364fcbf690ab37ce4bea0759",
".git/objects/4f/734b63fb5284f6aadb5b363ad1b5e9ac01e05f": "2c925286f62071fe4549ee3d89aa0081",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/8d/4ed48c79c760e04f89a91ce7ee61de6c316212": "86f527d464eff0cfce92d5d39651e59a",
".git/objects/8d/d15c6e9069f1e1625f1fdd2c5cb935c9005911": "aabc777e9e4f492cc28604570a6a6d65",
".git/objects/8d/03e909718b608583329f9b01e69c319cda391f": "2a828d9b9b55c256e074c284f39f0310",
".git/objects/8d/1b2d5f9d7afd1f31113255678acb1b4b4ce80c": "dfbad5c91cb6eede660b8b28ef7a6015",
".git/objects/12/91c73f6884f6f97905b003448ca8ab7b265cf4": "bb3397a38cecd1e52c84e15d968d6e77",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/69077dd7711b0548292f71eb8bb3996ec85bf1": "7fe4fb868f118d8636a427507d14ad7a",
".git/objects/1d/dde23b957262a7b1a9edd8f3b21e5195cff161": "9b4e18f432f9d182d2326695c3f498e2",
".git/objects/1d/83eada777c1ff176e36f71aab8d68dba1d997e": "ec052f4e04839b1b1cb95444d9cfba97",
".git/objects/71/b07ce028e0c59ce947b48d1d92fb7960eaabd8": "6b88078159a0e400836d558a81721d72",
".git/objects/71/a8d51d9eb523593deac036fe3776429b7a8351": "31f6ddfb5ded19f13c2898f15361886c",
".git/objects/71/de8a35d7a5279979ce998249cc888b61ddb7b0": "188a4dc1200beb85dda1b4441c404c78",
".git/objects/82/5180070089294bc9475c188af43634046de55b": "baa912f3f834877d616e721f5b7a8750",
".git/objects/82/3f2f615ec0f87afce0cb1f6a067356ce605633": "d4fb003191d19c61374db353fc0a619c",
".git/objects/49/339c6740ab56b639ecedc0edb4d1ec954eb104": "0c13596569e21f94a1a230a7c0386942",
".git/objects/40/8d1161fb142fb4a7c3af3631d3e3f89a5a19ae": "b948ed0fb282aabbbe890c8052c5b239",
".git/objects/40/13eb2bce01a23092fc56f41437be4a20ecd7b5": "f616248d1ccdb0c9dcbc67aca42b4627",
".git/objects/2e/8568a03baf9b5ffedf74a75a515cc415c1d486": "a0ce62ff79c688eee948e98ccf198f67",
".git/objects/2e/f2716a395f2c631083d5c515f5ad8d53437359": "b023b86e4b09d639ebc76c247f616917",
".git/objects/2b/789042762d31b98d9a2986128cc761581ff16a": "d5234735b56d8a2efea59baafd34837d",
".git/objects/2b/b3d994b0c1f475fd74410161e398ef04ab5327": "2fce4f40f1925cfc73febd775db0f024",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/47/d084a13e7affbb541d5d8e054eb48fe81ae399": "1e06076f79fbdc68c7b9d123be5c1d04",
".git/objects/47/e0f7ee8de5be67be3453e83e8284606ddb443a": "e84c45e584350544329e0dd0686a933b",
".git/objects/47/7fdb0ff8a422496f2ae9fee2a5c048728e4c2a": "f11d2d28aacb4063eb01bb67029af1ba",
".git/objects/78/1643ea0753c794a0af131f48b34389faef7a65": "85405c0522fbc7f2a1dcc85bddc6c603",
".git/objects/78/8b37418b645aa221096578a405e4bc19606467": "23159612254b655deeeaf14eb33696fb",
".git/objects/13/2daf294aacbc983f878ec3d59e6c45b99879cf": "607aebcfc4f1df5facc93f0764c51739",
".git/objects/7f/caec385dd2904a9abc450925bfc0c3433f7d84": "9fe63d70c946233be763c4d9ea7ca522",
".git/objects/7a/c656c5cc05ea9f6c7369dc6c64941c5dd55a65": "16bdb83d8b07f5e45ccbdce283a49dc1",
".git/objects/14/527d48e937a83f722e1ab9cb6103dbc7147647": "3f0def1b65811187f1a91cb90ba6fd04",
".git/objects/22/ff1b285d2d5a8ce9b35eab48c028e930acf29f": "2e6fb2bd971a4be22f636f6909580a0e",
".git/objects/25/35df3bbf52357574a37cbd9105689336123244": "1e2a27275a7f88007e34013c58fa480b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cd307c1908b101b9235c73ce26db6062",
".git/logs/refs/heads/main": "182b295fad8cdd862b5efd36b8e9db56",
".git/logs/refs/remotes/origin/HEAD": "6fcd819f2337bb9b070fc96511f571ae",
".git/logs/refs/remotes/origin/main": "30a37d4bd82fad91d32757fc8545cd1d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f9083cda75c178b748cc9af819976279",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "f9083cda75c178b748cc9af819976279",
".git/index": "effd67a97733a2a852f652740a0e1be6",
".git/packed-refs": "6f2fefa8edf3f9f4ffeee679a9ace3c7",
".git/COMMIT_EDITMSG": "a192f0ed36d688ccb61e7d4bd4f4e681",
".git/FETCH_HEAD": "6ef17fa857760cc476b8cf23e02662b6",
"assets/AssetManifest.json": "06d3d4c33805c73f553ed23aaed7955c",
"assets/NOTICES": "adb3b0862a6db1a94e620f81cf8dffac",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "4bf5bde48da77c85cc0ea14bbdab9c00",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "bbe3aa7c09417e4c3d1389c42ab7b658",
"assets/fonts/MaterialIcons-Regular.otf": "34b9d9282fe08cf1a60f58ad4741a7ea",
"assets/assets/my-picture.jpeg": "8652cf4d0acda1086c45f2fa318691b0",
"assets/assets/projects/tesa_ranking/3_tournaments.png": "099b34e930cfbf4679802001b7f59f27",
"assets/assets/projects/tesa_ranking/4_players_biography.png": "f6cd32f01ffe38266b5173e693095412",
"assets/assets/projects/tesa_ranking/6_videos.png": "ff23cc59170680e47f0dcc1e6eeb2d0c",
"assets/assets/projects/tesa_ranking/5_ranking.png": "f7d81472a9df8f549d1fffd8660e668a",
"assets/assets/projects/tesa_ranking/2_news.png": "beafb3b5f016bd0f82559e115741834a",
"assets/assets/projects/tesa_ranking/1_default_picture.png": "8173cd237dc0859f090c0732db75291a",
"assets/assets/projects/attadabor_fi_quran/4_my_dictionary.png": "fe050182032727a67aed18238d8ea41b",
"assets/assets/projects/attadabor_fi_quran/2_verse_menu.png": "6ac1c7cfe21e39438d3bfdb55013b989",
"assets/assets/projects/attadabor_fi_quran/3_categorization.png": "3292bb6659e3f31404c2864b4a98e935",
"assets/assets/projects/attadabor_fi_quran/5_my_categories.png": "556846f2713ee3fc2ae7a755dd56c96e",
"assets/assets/projects/attadabor_fi_quran/1_default_picture.png": "a84fbc24ba32ed0fa55595c64b96f329",
"assets/assets/projects/weekly_planner/5_settings.png": "628c6fe9512243eedf6c9eaad65a69db",
"assets/assets/projects/weekly_planner/3_current_day.png": "e738e8e3c3804e5f120a4fd15bb69374",
"assets/assets/projects/weekly_planner/1_default_picture.png": "ce58b869bbdde3dfcf00b4844e39aba8",
"assets/assets/projects/weekly_planner/4_task_details.png": "2d4ba34cb07621f24b6741b9f18a127c",
"assets/assets/projects/weekly_planner/2_weekly_planner.png": "51eb6fd959047c7c6ee73cbd5a600aaa",
"assets/assets/projects/randev/5_work_schedule_screen.png": "3848296c5099e6eb27dddfd16008af19",
"assets/assets/projects/randev/2_store_details_screen.png": "01f1c9e4703666a424fe0401067d022d",
"assets/assets/projects/randev/3_booking_screen.png": "197975a1209b1b4621a65dae9f685c33",
"assets/assets/projects/randev/4_create_store_screen.png": "c55efc71f8ecceb535eeea406906468b",
"assets/assets/projects/randev/1_default_picture.png": "99e089c5fb5437d98ab67c053e38cfc7",
"assets/assets/projects/bi_dashboard/3_charts_list.png": "dd864ad9a74432cdd0441cadffea91a1",
"assets/assets/projects/bi_dashboard/2_welcome.png": "080c63622b4123e8a84aca4982e62626",
"assets/assets/projects/bi_dashboard/1_default_picture.png": "a79112fedca5e749b941749cf8b91ad2",
"assets/assets/projects/bi_dashboard/4_add_chart.png": "cb1e5c0bcfec2ad8d6260070b9862841",
"assets/assets/Rafik_Gharbi_Resume.pdf": "66650e4d766486329cf23711dfb3f831",
"assets/assets/my-projects.json": "310601f07364bc9a164cc180825b941d",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
