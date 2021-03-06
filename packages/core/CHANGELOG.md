# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [17.7.0](https://github.com/microfleet/core/compare/@microfleet/core@17.6.0...@microfleet/core@17.7.0) (2021-07-08)


### Bug Fixes

* conflicts ([650e327](https://github.com/microfleet/core/commit/650e3278a612917cea6f30d74826785dfd021d23))
* conflicts ([035ec0d](https://github.com/microfleet/core/commit/035ec0da4959036ba6b31c948c0d06713dafa5b8))
* termination sequence ([044fbe8](https://github.com/microfleet/core/commit/044fbe833651680f08e27fd8bebb4c59805d8b7f))
* **tests:** upgrade transport-amqp ([012e4ee](https://github.com/microfleet/core/commit/012e4eecad069782c2c55dde92f88df503669a1e))
* **types:** upgrade @microfleet/transport-amqp ([6ae1973](https://github.com/microfleet/core/commit/6ae1973cfdefad44f894cda10dc24c52d80464e1))
* couchdb plugin ([fd9289b](https://github.com/microfleet/core/commit/fd9289bcad542efe83af1746af2a2c9ca3e75604))
* linter error ([0de549b](https://github.com/microfleet/core/commit/0de549b44023106ae9a29d9afb45680f5050f84d))
* merge router to validator branch ([bfb9258](https://github.com/microfleet/core/commit/bfb92589e391a0f2c2d5b232744695b0ae4b8dfc))
* plugin-socketio tests ([bc3c0ee](https://github.com/microfleet/core/commit/bc3c0ee7d46174e09111cc2f18a8ede1d9277e02))
* remove old files ([13be308](https://github.com/microfleet/core/commit/13be30889f1aea9b61157b4c9a2d53012b48a1d2))
* temp fix for CI ([5364807](https://github.com/microfleet/core/commit/53648073309a13e93f0b0030b14513f14dc1c092))
* try lint on CI ([6288390](https://github.com/microfleet/core/commit/628839088cc12969bad1b76baec6007c0f693226))
* ts-ignore for pino symbol ([8847eae](https://github.com/microfleet/core/commit/8847eae445f984b58ab95d607a3c62755579697d))
* type updates ([af430df](https://github.com/microfleet/core/commit/af430dff91213d280e5aa3f0fd5592695553e9c2))


### Features

* elasticsearch, redis plugins ([79bc4c3](https://github.com/microfleet/core/commit/79bc4c384abb8cf9902697cc3931130e00397a69))
* externalize opentracing & prometheus ([f32f7fd](https://github.com/microfleet/core/commit/f32f7fd9729aaf849f67a3bfa0612c7b3a43dbe3))
* improve perf based on benchmarks ([2ad3aac](https://github.com/microfleet/core/commit/2ad3aac102721d47184263b008ff1d92fa54d754))
* kafka upgrades, remove unused plugins ([12f8018](https://github.com/microfleet/core/commit/12f8018ceade8d95759da09eac8bab2ab9a9aade))
* merge router ([c05d1d9](https://github.com/microfleet/core/commit/c05d1d97c3ab0e2d6e55729b4c5fca4bf346751b))
* merge router amqp ([5f487cb](https://github.com/microfleet/core/commit/5f487cb8173c447111962807bb9fb9fb195e1583))
* move out plugin validator ([47abe87](https://github.com/microfleet/core/commit/47abe87e8252eb427ee72de46d7e9740f2071ab5))
* plugin-amqp, plugin-router-amqp ([b661ffb](https://github.com/microfleet/core/commit/b661ffb3c6effa0f4f87c2eff1b7a65653b033ff))
* plugin-cassandra ([2a53771](https://github.com/microfleet/core/commit/2a5377101a296bec97dddde1349c3de3c509aab9))
* plugin-http ([1e68ae1](https://github.com/microfleet/core/commit/1e68ae150b09d8656ee3f3518361970908994cd1))
* plugin-router-http ([70725f9](https://github.com/microfleet/core/commit/70725f9c1cab7a6766b92a8db9999e3624b69742))
* plugin-router-socketio ([#468](https://github.com/microfleet/core/issues/468)) ([d83468e](https://github.com/microfleet/core/commit/d83468e2d207c4818adcc14e2b2a1560e6f0aa1e))





# [17.6.0](https://github.com/microfleet/core/compare/@microfleet/core@17.5.4...@microfleet/core@17.6.0) (2021-04-15)


### Features

* **plugin-logger:** decr err lvl using "getErrorLevel" in conf ([#499](https://github.com/microfleet/core/issues/499)) ([1ae63a0](https://github.com/microfleet/core/commit/1ae63a0a1df8e60d4cc4e04cf469a215a51cc785))





## [17.5.4](https://github.com/microfleet/core/compare/@microfleet/core@17.5.3...@microfleet/core@17.5.4) (2021-02-19)


### Bug Fixes

* migrate to undeprecated elastic library ([f3ba4d9](https://github.com/microfleet/core/commit/f3ba4d949c2b9fe2717bfed24425ce8728d0a1d6))





## [17.5.3](https://github.com/microfleet/core/compare/@microfleet/core@17.5.2...@microfleet/core@17.5.3) (2020-09-03)


### Bug Fixes

* invalid response validation on error ([57d16c5](https://github.com/microfleet/core/commit/57d16c5daa665fda3f27183068a0bc2d77a2de9a))





## [17.5.2](https://github.com/microfleet/core/compare/@microfleet/core@17.5.1...@microfleet/core@17.5.2) (2020-08-26)


### Bug Fixes

* validation for action schema ([#458](https://github.com/microfleet/core/issues/458)) ([170b014](https://github.com/microfleet/core/commit/170b014ba7ca80d5e09cd8641b1079f3671f6e54))





## [17.5.1](https://github.com/microfleet/core/compare/@microfleet/core@17.5.0...@microfleet/core@17.5.1) (2020-08-25)


### Bug Fixes

* **core:** ability to turn off auto schema for single action ([48cec10](https://github.com/microfleet/core/commit/48cec10af8c234b96a2ea910c26570a67695a899))





# [17.5.0](https://github.com/microfleet/core/compare/@microfleet/core@17.4.0...@microfleet/core@17.5.0) (2020-08-09)


### Features

* @microfleet/plugin-dlock + .redisType + .duplicateRedis() ([#448](https://github.com/microfleet/core/issues/448)) ([42d9783](https://github.com/microfleet/core/commit/42d9783acbd51452bab2145873b36ef5cd4f55de))





# [17.4.0](https://github.com/microfleet/core/compare/@microfleet/core@17.3.5...@microfleet/core@17.4.0) (2020-07-28)


### Features

* response validation ([#438](https://github.com/microfleet/core/issues/438)) ([bbb2706](https://github.com/microfleet/core/commit/bbb27066eefaea1018c2a69ca05ec5936916c5b8))





## [17.3.5](https://github.com/microfleet/core/compare/@microfleet/core@17.3.4...@microfleet/core@17.3.5) (2020-07-22)


### Bug Fixes

* **deps:** bring back uuid ([#443](https://github.com/microfleet/core/issues/443)) ([f6e0f1e](https://github.com/microfleet/core/commit/f6e0f1e3437286e696a90149e7113f08ca8cb3ef))





## [17.3.4](https://github.com/microfleet/core/compare/@microfleet/core@17.3.3...@microfleet/core@17.3.4) (2020-06-29)


### Bug Fixes

* _require chalk usage ([339aa6b](https://github.com/microfleet/core/commit/339aa6bdf253855d41cca1a276361a72519e76f8))
* eslint upgrade ([4282fd6](https://github.com/microfleet/core/commit/4282fd697c67d9dc6942fdd933920bc82ca2a5fc))





## [17.3.3](https://github.com/microfleet/core/compare/@microfleet/core@17.3.2...@microfleet/core@17.3.3) (2020-06-12)


### Bug Fixes

* import ([f69b11a](https://github.com/microfleet/core/commit/f69b11a8e10e6dd1e86379cdd1437c2e5479f5f5))
* imports ([dccb605](https://github.com/microfleet/core/commit/dccb605da3fae51f0f9957c46ecac24af036e537))
* improved types ([61859a9](https://github.com/microfleet/core/commit/61859a9e2c423f549931fa95445aa31848be2375))
* update deps ([bd2790a](https://github.com/microfleet/core/commit/bd2790aceed96561691faf954cfb2e1b52dfda65))





## [17.3.2](https://github.com/microfleet/core/compare/@microfleet/core@17.3.1...@microfleet/core@17.3.2) (2020-05-19)


### Bug Fixes

* jest 26 upgrade + plugin-kafka-types fix ([#426](https://github.com/microfleet/core/issues/426)) ([3b6a3b2](https://github.com/microfleet/core/commit/3b6a3b27c104873b3e3665b89b5e015e9929cf30))





## [17.3.1](https://github.com/microfleet/core/compare/@microfleet/core@17.3.0...@microfleet/core@17.3.1) (2020-05-15)


### Bug Fixes

* update dependencies ([24ecb3a](https://github.com/microfleet/core/commit/24ecb3ac3597de073095ce54305cc8ec707c1333))





# [17.3.0](https://github.com/microfleet/core/compare/@microfleet/core@17.2.0...@microfleet/core@17.3.0) (2020-04-16)


### Features

* kafka custom stream ([#405](https://github.com/microfleet/core/issues/405)) ([2ce74d3](https://github.com/microfleet/core/commit/2ce74d3c92f57184acf4f7e8036518acbe8f5319))





# [17.2.0](https://github.com/microfleet/core/compare/@microfleet/core@17.1.0...@microfleet/core@17.2.0) (2020-04-10)


### Features

* **plugin-logger:** export fingerprint ([e182333](https://github.com/microfleet/core/commit/e1823336acfdf2a70ad23ad54407111a94f70ed8))





# [17.1.0](https://github.com/microfleet/core/compare/@microfleet/core@17.0.0...@microfleet/core@17.1.0) (2020-04-07)


### Bug Fixes

* add logger as always installed dependency of microfleet/core ([139e167](https://github.com/microfleet/core/commit/139e167c17584855ef1af9d7ad67535b27365145))
* bugs during refactor ([c632d24](https://github.com/microfleet/core/commit/c632d2447eae7b2c49a675803797bd6b4346f718))
* disallow console again ([62b73a8](https://github.com/microfleet/core/commit/62b73a8993320fa6be0708b30a31efb62d52e328))


### Features

* external logger module ([4bdbbac](https://github.com/microfleet/core/commit/4bdbbace81de1e3bc6bab6ef21ecaaff6a303ace))
* merge fingerprint ([5fc647d](https://github.com/microfleet/core/commit/5fc647ddca5e8102bcad9ebba22af8bae76c409f))
* **logger:** sentry event fingerprinting ([e90fd6b](https://github.com/microfleet/core/commit/e90fd6b6184dd4f408a400babafb19c64c0819a6))
* **logger:** sentry event fingerprinting ([ede252a](https://github.com/microfleet/core/commit/ede252aff8b3717005eb057c869eed25cb123cbf))
* **logger:** sentry event fingerprinting ([56773c5](https://github.com/microfleet/core/commit/56773c53f0d749a6901a6a8e745bc5897be40a3f))
* refactor to eslint ([2707e95](https://github.com/microfleet/core/commit/2707e95559581dd9f0d8efaf375e0f30c846acb9))
* standalone logger plugin ([2024817](https://github.com/microfleet/core/commit/2024817709c1aabf452fe8020ba6f2b4549db2e2))
* standalone logger plugin ([afc0414](https://github.com/microfleet/core/commit/afc0414b2706bf0e9ca4d49918508a69398f65c5))
* standalone logger plugin ([db4a1e1](https://github.com/microfleet/core/commit/db4a1e174a5389fe1f5171778242ebd99b9fc834))





# [17.0.0](https://github.com/microfleet/core/compare/@microfleet/core@16.0.4...@microfleet/core@17.0.0) (2020-03-13)


### Bug Fixes

* microfleet/validation version bump ([#402](https://github.com/microfleet/core/issues/402)) ([9023c22](https://github.com/microfleet/core/commit/9023c22123476ea98079df6a1ae6c7039b7508a1))


### BREAKING CHANGES

* This fix bumps @microfleet/validation version





## [16.0.4](https://github.com/microfleet/core/compare/@microfleet/core@16.0.3...@microfleet/core@16.0.4) (2020-03-06)

**Note:** Version bump only for package @microfleet/core





## [16.0.3](https://github.com/microfleet/core/compare/@microfleet/core@16.0.2...@microfleet/core@16.0.3) (2020-02-13)

**Note:** Version bump only for package @microfleet/core





## [16.0.2](https://github.com/microfleet/core/compare/@microfleet/core@16.0.1...@microfleet/core@16.0.2) (2020-02-05)

**Note:** Version bump only for package @microfleet/core





## [16.0.1](https://github.com/microfleet/core/compare/@microfleet/core@16.0.0...@microfleet/core@16.0.1) (2020-01-24)

**Note:** Version bump only for package @microfleet/core





# [16.0.0](https://github.com/microfleet/core/compare/@microfleet/core@15.7.1...@microfleet/core@16.0.0) (2020-01-21)


### Features

* upgrade all deps ([#380](https://github.com/microfleet/core/issues/380)) ([0e12454](https://github.com/microfleet/core/commit/0e12454cd78982eaaa77ea68a9fe6597404b702e))


### BREAKING CHANGES

* requires node 12+, uses @hapi/joi 17, @hapi/hapi 19, ms-conf & @makeomatic/confidence updates.
That would potentially require changes to service deployments





## [15.7.1](https://github.com/microfleet/core/compare/@microfleet/core@15.7.0...@microfleet/core@15.7.1) (2020-01-17)

**Note:** Version bump only for package @microfleet/core





# [15.7.0](https://github.com/microfleet/core/compare/@microfleet/core@15.6.1...@microfleet/core@15.7.0) (2019-12-17)


### Features

* allow to load lua scripts from multiple paths ([6a9cb38](https://github.com/microfleet/core/commit/6a9cb38a7c29a360739451f215b706762496f46b))





## [15.6.1](https://github.com/microfleet/core/compare/@microfleet/core@15.6.0...@microfleet/core@15.6.1) (2019-12-11)


### Bug Fixes

* **amqp:** consider router prefix on retry ([7827741](https://github.com/microfleet/core/commit/78277414206870a082acae29911b68890af945f7))





# [15.6.0](https://github.com/microfleet/core/compare/@microfleet/core@15.5.2...@microfleet/core@15.6.0) (2019-11-28)


### Features

* added Authentication doc ([#353](https://github.com/microfleet/core/issues/353)) ([08012a9](https://github.com/microfleet/core/commit/08012a9374cca894a2bc746cacdda89810fd76a9))





## [15.5.2](https://github.com/microfleet/core/compare/@microfleet/core@15.5.1...@microfleet/core@15.5.2) (2019-11-22)

**Note:** Version bump only for package @microfleet/core





## [15.5.1](https://github.com/microfleet/core/compare/@microfleet/core@15.5.0...@microfleet/core@15.5.1) (2019-11-15)

**Note:** Version bump only for package @microfleet/core





# [15.5.0](https://github.com/microfleet/core/compare/@microfleet/core@15.4.1...@microfleet/core@15.5.0) (2019-11-15)


### Features

* redis docs ([8ed8093](https://github.com/microfleet/core/commit/8ed80935a299bda08511a5147978a7a2a38694aa))
* redis docs ([e6eed5a](https://github.com/microfleet/core/commit/e6eed5aab303aa90907d93cf5acde20a03105973))
* redis docs ([c046432](https://github.com/microfleet/core/commit/c046432b992fef93288b6e414f85049eda03bde1))





## [15.4.1](https://github.com/microfleet/core/compare/@microfleet/core@15.4.0...@microfleet/core@15.4.1) (2019-11-13)


### Bug Fixes

* improved logging experience ([#359](https://github.com/microfleet/core/issues/359)) ([35c9334](https://github.com/microfleet/core/commit/35c93349d9efdcebcfbf0f76cc97fd855d6f81e6))





# [15.4.0](https://github.com/microfleet/core/compare/@microfleet/core@15.3.1...@microfleet/core@15.4.0) (2019-11-12)


### Features

* **couchdb:** plugin for couchdb ([#358](https://github.com/microfleet/core/issues/358)) ([a9fe2ac](https://github.com/microfleet/core/commit/a9fe2ac3a3559908bf3f2d873a0e621051d71886))





## [15.3.1](https://github.com/microfleet/core/compare/@microfleet/core@15.3.0...@microfleet/core@15.3.1) (2019-10-24)


### Bug Fixes

* **amqp:** avoid unhandled promise rejections ([#350](https://github.com/microfleet/core/issues/350)) ([76b7739](https://github.com/microfleet/core/commit/76b77393dfd925969c4d7378fe29a6fef95f01e7))





# [15.3.0](https://github.com/microfleet/core/compare/@microfleet/core@15.2.3...@microfleet/core@15.3.0) (2019-10-21)


### Features

* externalize knex to a separate plugin ([#349](https://github.com/microfleet/core/issues/349)) ([705aa42](https://github.com/microfleet/core/commit/705aa424a7685a994e742a946eef2d2c28067e79))





## [15.2.3](https://github.com/microfleet/core/compare/@microfleet/core@15.2.2...@microfleet/core@15.2.3) (2019-10-21)


### Bug Fixes

* **bin:** correctly reference service ([c367259](https://github.com/microfleet/core/commit/c36725986e7c1776ffbf038549e56d1f66e3f4e4))





## [15.2.2](https://github.com/microfleet/core/compare/@microfleet/core@15.2.1...@microfleet/core@15.2.2) (2019-10-21)


### Bug Fixes

* mfleet binary for native promises ([3dee040](https://github.com/microfleet/core/commit/3dee040d1ed2a595fae8bb3e7dd6e1e7dc7c38cc))





## [15.2.1](https://github.com/microfleet/core/compare/@microfleet/core@15.2.0...@microfleet/core@15.2.1) (2019-10-18)

**Note:** Version bump only for package @microfleet/core





# [15.2.0](https://github.com/microfleet/core/compare/@microfleet/core@15.1.0...@microfleet/core@15.2.0) (2019-10-18)


### Features

* plugin consul ([#346](https://github.com/microfleet/core/issues/346)) ([c88a875](https://github.com/microfleet/core/commit/c88a87504b1ebd1c0acb4998194df19200f2ca04))





# [15.1.0](https://github.com/microfleet/core/compare/@microfleet/core@15.0.3...@microfleet/core@15.1.0) (2019-10-16)


### Features

* graceful reload ([#347](https://github.com/microfleet/core/issues/347)) ([349deb5](https://github.com/microfleet/core/commit/349deb5b5d054bc0fc21decba57518cdb5091348))





## [15.0.3](https://github.com/microfleet/core/compare/@microfleet/core@15.0.2...@microfleet/core@15.0.3) (2019-10-16)

**Note:** Version bump only for package @microfleet/core





## [15.0.2](https://github.com/microfleet/core/compare/@microfleet/core@15.0.1...@microfleet/core@15.0.2) (2019-10-11)


### Bug Fixes

* ugprades all deps, fixes breaking changes ([8b9d572](https://github.com/microfleet/core/commit/8b9d572))





## [15.0.1](https://github.com/microfleet/core/compare/@microfleet/core@15.0.0...@microfleet/core@15.0.1) (2019-10-02)


### Bug Fixes

* **validator:** remove unnecessary property from config ([#343](https://github.com/microfleet/core/issues/343)) ([b97b2f3](https://github.com/microfleet/core/commit/b97b2f3))





# [15.0.0](https://github.com/microfleet/core/compare/@microfleet/core@14.1.2...@microfleet/core@15.0.0) (2019-10-01)


### Features

* refactor config for validator plugin ([#339](https://github.com/microfleet/core/issues/339)) ([7ed49f4](https://github.com/microfleet/core/commit/7ed49f4))


### BREAKING CHANGES

* reworked validator plugin to allow stricter validation and decoupling of plugins. This is a first breaking change in a series. Consider this major version unstable. Next version will be LTS and continue to adhere to semver





## [14.1.2](https://github.com/microfleet/core/compare/@microfleet/core@14.1.1...@microfleet/core@14.1.2) (2019-09-25)

**Note:** Version bump only for package @microfleet/core





## [14.1.1](https://github.com/microfleet/core/compare/@microfleet/core@14.1.0...@microfleet/core@14.1.1) (2019-09-25)

**Note:** Version bump only for package @microfleet/core





# [14.1.0](https://github.com/microfleet/core/compare/@microfleet/core@14.0.8...@microfleet/core@14.1.0) (2019-09-24)


### Features

* describe structure ([146163d](https://github.com/microfleet/core/commit/146163d))
* structure tree ([2cea4b1](https://github.com/microfleet/core/commit/2cea4b1))





## [14.0.8](https://github.com/microfleet/core/compare/@microfleet/core@14.0.7...@microfleet/core@14.0.8) (2019-09-23)

**Note:** Version bump only for package @microfleet/core





## [14.0.7](https://github.com/microfleet/core/compare/@microfleet/core@14.0.6...@microfleet/core@14.0.7) (2019-09-19)

**Note:** Version bump only for package @microfleet/core





## [14.0.6](https://github.com/microfleet/core/compare/@microfleet/core@14.0.5...@microfleet/core@14.0.6) (2019-09-18)

**Note:** Version bump only for package @microfleet/core





## [14.0.5](https://github.com/microfleet/core/compare/@microfleet/core@14.0.4...@microfleet/core@14.0.5) (2019-09-16)


### Bug Fixes

* define action route in validateAction ValidationError ([#332](https://github.com/microfleet/core/issues/332)) ([ea63995](https://github.com/microfleet/core/commit/ea63995))





## [14.0.4](https://github.com/microfleet/core/compare/@microfleet/core@14.0.3...@microfleet/core@14.0.4) (2019-09-11)


### Bug Fixes

* upgrade deps ([e3ee731](https://github.com/microfleet/core/commit/e3ee731))





## [14.0.3](https://github.com/microfleet/core/compare/@microfleet/core@14.0.2...@microfleet/core@14.0.3) (2019-08-30)


### Bug Fixes

* update dependencies ([984135a](https://github.com/microfleet/core/commit/984135a))
* **http:** set default handler to hapi ([#330](https://github.com/microfleet/core/issues/330)) ([b83b4bd](https://github.com/microfleet/core/commit/b83b4bd))





## [14.0.2](https://github.com/microfleet/core/compare/@microfleet/core@14.0.1...@microfleet/core@14.0.2) (2019-08-22)


### Bug Fixes

* clone params on dispatch ([10e56a2](https://github.com/microfleet/core/commit/10e56a2))
* **dispatch:** work with nil-like dispatch ([af39b54](https://github.com/microfleet/core/commit/af39b54))





## [14.0.1](https://github.com/microfleet/core/compare/@microfleet/core@14.0.0...@microfleet/core@14.0.1) (2019-07-30)

**Note:** Version bump only for package @microfleet/core





# [14.0.0](https://github.com/microfleet/core/compare/@microfleet/core@13.9.1...@microfleet/core@14.0.0) (2019-06-26)


### Features

* upgrade hapi to @hapi/hapi ([29ed9e3](https://github.com/microfleet/core/commit/29ed9e3))


### BREAKING CHANGES

* uses @hapi/hapi, @hapi/joi, etc





## [13.9.1](https://github.com/microfleet/core/compare/@microfleet/core@13.9.0...@microfleet/core@13.9.1) (2019-06-13)


### Bug Fixes

* correct release publisher ([e90cb12](https://github.com/microfleet/core/commit/e90cb12))





# [13.9.0](https://github.com/microfleet/core/compare/@microfleet/core@13.8.1...@microfleet/core@13.9.0) (2019-06-13)


### Bug Fixes

* fix lint errors ([50b599f](https://github.com/microfleet/core/commit/50b599f))
* update sentry logger tests ([50f1ce2](https://github.com/microfleet/core/commit/50f1ce2))


### Features

* add tests ([0326a74](https://github.com/microfleet/core/commit/0326a74))
* update minor dependencies ([2e7dda4](https://github.com/microfleet/core/commit/2e7dda4))





## 13.8.1 (2019-04-08)


### Bug Fixes

* allow dispatch to pass auth obj ([a1bea26](https://github.com/microfleet/core/commit/a1bea26))
* attaching extra data to error ([d43844e](https://github.com/microfleet/core/commit/d43844e))
* binary, main export ([a0eb7ed](https://github.com/microfleet/core/commit/a0eb7ed))
* bug in the amqp routing ([72fd150](https://github.com/microfleet/core/commit/72fd150))
* correct stacktrace order ([b1819f1](https://github.com/microfleet/core/commit/b1819f1))
* crash on sentry logger ([e62c361](https://github.com/microfleet/core/commit/e62c361))
* crash when sending sentry logs ([b918f38](https://github.com/microfleet/core/commit/b918f38))
* ensure bluebird gets its own copy with cancellation active ([0f246df](https://github.com/microfleet/core/commit/0f246df))
* ensure knex retries the connection several times ([fc3af6a](https://github.com/microfleet/core/commit/fc3af6a))
* enums in export declarations not preserved ([51d7110](https://github.com/microfleet/core/commit/51d7110))
* expose more types ([bf645f6](https://github.com/microfleet/core/commit/bf645f6))
* improve audit logger ([5189838](https://github.com/microfleet/core/commit/5189838))
* linter notice ([e157a82](https://github.com/microfleet/core/commit/e157a82))
* logging to sentry ([7e94a12](https://github.com/microfleet/core/commit/7e94a12))
* re-release ([3449ff4](https://github.com/microfleet/core/commit/3449ff4))
* redisCluster endless connect ([de169d1](https://github.com/microfleet/core/commit/de169d1))
* redisSentinel schema, more types ([62d1556](https://github.com/microfleet/core/commit/62d1556))
* release bugs due to deploy overrides ([f7cc63d](https://github.com/microfleet/core/commit/f7cc63d))
* rework and use raw logging of sentry ([a5bec0f](https://github.com/microfleet/core/commit/a5bec0f))
* sentry timestamp value ([6a11b91](https://github.com/microfleet/core/commit/6a11b91))
* service.dispatch types ([4ca8235](https://github.com/microfleet/core/commit/4ca8235))
* single export file, changelog ([baeca33](https://github.com/microfleet/core/commit/baeca33))
* stacktrace extraction ([6285d12](https://github.com/microfleet/core/commit/6285d12))
* start create configuration interface ([3c3c383](https://github.com/microfleet/core/commit/3c3c383))
* ts opts ([e0d92aa](https://github.com/microfleet/core/commit/e0d92aa))
* update all deps ([ebc6661](https://github.com/microfleet/core/commit/ebc6661))
* update lock file ([706dc17](https://github.com/microfleet/core/commit/706dc17))


### Features

* **log:** change library for setry (raven to sentry node) ([#291](https://github.com/microfleet/core/issues/291)) ([67345fe](https://github.com/microfleet/core/commit/67345fe))
* **router:** options for disable some errors for audit log ([#297](https://github.com/microfleet/core/issues/297)) ([da43919](https://github.com/microfleet/core/commit/da43919))
* log pretty ([#311](https://github.com/microfleet/core/issues/311)) ([4fc3715](https://github.com/microfleet/core/commit/4fc3715))
* maintenance mode ([#310](https://github.com/microfleet/core/issues/310)) ([1212b61](https://github.com/microfleet/core/commit/1212b61))
* more ts types, upgrade all deps ([#290](https://github.com/microfleet/core/issues/290)) ([64a3aba](https://github.com/microfleet/core/commit/64a3aba))
* prometheus ([#303](https://github.com/microfleet/core/issues/303)) ([698fe21](https://github.com/microfleet/core/commit/698fe21))
* rework logger ([4e870fd](https://github.com/microfleet/core/commit/4e870fd))
* reworked in typescript ([#289](https://github.com/microfleet/core/issues/289)) ([3b92426](https://github.com/microfleet/core/commit/3b92426))
* run all hooks of pipeline, regardless of action ([87cc941](https://github.com/microfleet/core/commit/87cc941))


### BREAKING CHANGES

* restructured this to be a monorepo in an effort to separate all of the bundled plugins later on. For now all releases will be published under `@next` tag. Uses experimental semantic-release-monorepo to support independent versioning. Removed express & restify support from http adapters
