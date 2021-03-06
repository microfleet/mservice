# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.7.0](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@2.6.6...@microfleet/plugin-kafka@2.7.0) (2021-07-08)


### Bug Fixes

* conflicts ([035ec0d](https://github.com/microfleet/core/commit/035ec0da4959036ba6b31c948c0d06713dafa5b8))
* missing schema publish in redis sentinel plugin ([be06397](https://github.com/microfleet/core/commit/be0639786ac3d7d796d7b045d149038f544ea82b))
* update dlock plugin ([2f506ac](https://github.com/microfleet/core/commit/2f506ac0d472db27cd6637c5138b1b2e38ae91ce))
* **debug:** skip kafka test ([9e0998d](https://github.com/microfleet/core/commit/9e0998d8ab03827f1404ff410469c94dcc253327))
* **debug:** skip kafka test ([ccabf1a](https://github.com/microfleet/core/commit/ccabf1a6b0156851b6b830cf1f83e81556548562))
* **tests:** enable kafka tests ([be9f6b4](https://github.com/microfleet/core/commit/be9f6b4d5574e9a4fd54fea2535df1d2ab23a2bc))
* **tests:** upgrade transport-amqp ([012e4ee](https://github.com/microfleet/core/commit/012e4eecad069782c2c55dde92f88df503669a1e))
* kafka typings ([a2a4a7e](https://github.com/microfleet/core/commit/a2a4a7e7c0c2e57639e9dd59b6736d056f7528f6))
* linter error ([0de549b](https://github.com/microfleet/core/commit/0de549b44023106ae9a29d9afb45680f5050f84d))
* ts-ignore for pino symbol ([8847eae](https://github.com/microfleet/core/commit/8847eae445f984b58ab95d607a3c62755579697d))
* type updates ([af430df](https://github.com/microfleet/core/commit/af430dff91213d280e5aa3f0fd5592695553e9c2))


### Features

* elasticsearch, redis plugins ([79bc4c3](https://github.com/microfleet/core/commit/79bc4c384abb8cf9902697cc3931130e00397a69))
* improve perf based on benchmarks ([2ad3aac](https://github.com/microfleet/core/commit/2ad3aac102721d47184263b008ff1d92fa54d754))
* kafka upgrades, remove unused plugins ([12f8018](https://github.com/microfleet/core/commit/12f8018ceade8d95759da09eac8bab2ab9a9aade))
* merge router ([c05d1d9](https://github.com/microfleet/core/commit/c05d1d97c3ab0e2d6e55729b4c5fca4bf346751b))
* move out plugin validator ([47abe87](https://github.com/microfleet/core/commit/47abe87e8252eb427ee72de46d7e9740f2071ab5))
* plugin-cassandra ([2a53771](https://github.com/microfleet/core/commit/2a5377101a296bec97dddde1349c3de3c509aab9))
* plugin-http ([1e68ae1](https://github.com/microfleet/core/commit/1e68ae150b09d8656ee3f3518361970908994cd1))
* plugin-router-http ([70725f9](https://github.com/microfleet/core/commit/70725f9c1cab7a6766b92a8db9999e3624b69742))





## [2.6.6](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@2.6.5...@microfleet/plugin-kafka@2.6.6) (2021-04-15)

**Note:** Version bump only for package @microfleet/plugin-kafka





## [2.6.5](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@2.6.4...@microfleet/plugin-kafka@2.6.5) (2021-02-19)

**Note:** Version bump only for package @microfleet/plugin-kafka





## [2.6.4](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@2.6.3...@microfleet/plugin-kafka@2.6.4) (2020-09-03)

**Note:** Version bump only for package @microfleet/plugin-kafka





## [2.6.3](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@2.6.2...@microfleet/plugin-kafka@2.6.3) (2020-08-26)

**Note:** Version bump only for package @microfleet/plugin-kafka





## [2.6.2](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@2.6.1...@microfleet/plugin-kafka@2.6.2) (2020-08-25)

**Note:** Version bump only for package @microfleet/plugin-kafka





## [2.6.1](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@2.6.0...@microfleet/plugin-kafka@2.6.1) (2020-08-09)

**Note:** Version bump only for package @microfleet/plugin-kafka





# [2.6.0](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@2.5.2...@microfleet/plugin-kafka@2.6.0) (2020-07-28)


### Features

* response validation ([#438](https://github.com/microfleet/core/issues/438)) ([bbb2706](https://github.com/microfleet/core/commit/bbb27066eefaea1018c2a69ca05ec5936916c5b8))





## [2.5.2](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@2.5.1...@microfleet/plugin-kafka@2.5.2) (2020-07-22)

**Note:** Version bump only for package @microfleet/plugin-kafka





## [2.5.1](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@2.5.0...@microfleet/plugin-kafka@2.5.1) (2020-07-15)


### Bug Fixes

* change offset_commit_cb logic + error handler ([#437](https://github.com/microfleet/core/issues/437)) ([85d6e26](https://github.com/microfleet/core/commit/85d6e261db4b5509e495ddd914925abe18995b9e))





# [2.5.0](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@2.4.0...@microfleet/plugin-kafka@2.5.0) (2020-06-29)


### Bug Fixes

* unnecessary code ([0830282](https://github.com/microfleet/core/commit/0830282875de28c9512997e044851d784dac1387))


### Features

* admin client use blubird-retry ([88bc37e](https://github.com/microfleet/core/commit/88bc37e36ecbcf44bc1a965995a7fe6e74a8b6cb))





# [2.4.0](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@2.3.2...@microfleet/plugin-kafka@2.4.0) (2020-06-12)


### Features

* extra message filters and tester image ([#430](https://github.com/microfleet/core/issues/430)) ([1ae435a](https://github.com/microfleet/core/commit/1ae435aa331c0b80cf714e34cc13e8ae02296fba))





## [2.3.2](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@2.3.1...@microfleet/plugin-kafka@2.3.2) (2020-06-12)


### Bug Fixes

* improved types ([61859a9](https://github.com/microfleet/core/commit/61859a9e2c423f549931fa95445aa31848be2375))
* update deps ([bd2790a](https://github.com/microfleet/core/commit/bd2790aceed96561691faf954cfb2e1b52dfda65))





## [2.3.1](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@2.3.0...@microfleet/plugin-kafka@2.3.1) (2020-05-19)


### Bug Fixes

* jest 26 upgrade + plugin-kafka-types fix ([#426](https://github.com/microfleet/core/issues/426)) ([3b6a3b2](https://github.com/microfleet/core/commit/3b6a3b27c104873b3e3665b89b5e015e9929cf30))





# [2.3.0](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@2.2.2...@microfleet/plugin-kafka@2.3.0) (2020-05-15)


### Bug Fixes

* update dependencies ([24ecb3a](https://github.com/microfleet/core/commit/24ecb3ac3597de073095ce54305cc8ec707c1333))


### Features

* kafka admin client + some sugar ([#423](https://github.com/microfleet/core/issues/423)) ([0150da1](https://github.com/microfleet/core/commit/0150da14d9d136b5665f0e76cf82eadebeb1eeda))





## [2.2.2](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@2.2.1...@microfleet/plugin-kafka@2.2.2) (2020-04-29)


### Bug Fixes

* **plugin-kafka:** offsetsStore called using lower offsets ([#419](https://github.com/microfleet/core/issues/419)) ([621edc1](https://github.com/microfleet/core/commit/621edc135786fe373527a18558e965e1f51e9367))





## [2.2.1](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@2.2.0...@microfleet/plugin-kafka@2.2.1) (2020-04-28)

**Note:** Version bump only for package @microfleet/plugin-kafka





# [2.2.0](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@2.1.1...@microfleet/plugin-kafka@2.2.0) (2020-04-16)


### Features

* kafka custom stream ([#405](https://github.com/microfleet/core/issues/405)) ([2ce74d3](https://github.com/microfleet/core/commit/2ce74d3c92f57184acf4f7e8036518acbe8f5319))





## [2.1.1](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@2.1.0...@microfleet/plugin-kafka@2.1.1) (2020-04-10)

**Note:** Version bump only for package @microfleet/plugin-kafka





# [2.1.0](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@2.0.0...@microfleet/plugin-kafka@2.1.0) (2020-04-07)


### Features

* external logger module ([4bdbbac](https://github.com/microfleet/core/commit/4bdbbace81de1e3bc6bab6ef21ecaaff6a303ace))
* refactor to eslint ([2707e95](https://github.com/microfleet/core/commit/2707e95559581dd9f0d8efaf375e0f30c846acb9))





# [2.0.0](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@1.0.6...@microfleet/plugin-kafka@2.0.0) (2020-03-13)


### Bug Fixes

* microfleet/validation version bump ([#402](https://github.com/microfleet/core/issues/402)) ([9023c22](https://github.com/microfleet/core/commit/9023c22123476ea98079df6a1ae6c7039b7508a1))


### BREAKING CHANGES

* This fix bumps @microfleet/validation version





## [1.0.6](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@1.0.5...@microfleet/plugin-kafka@1.0.6) (2020-03-06)

**Note:** Version bump only for package @microfleet/plugin-kafka





## [1.0.5](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@1.0.4...@microfleet/plugin-kafka@1.0.5) (2020-03-06)


### Bug Fixes

* add missing exported types and method defs ([#398](https://github.com/microfleet/core/issues/398)) ([e4b31b3](https://github.com/microfleet/core/commit/e4b31b3141662ee3e15c6de6d7a9b2abcdb80777))





## [1.0.4](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@1.0.3...@microfleet/plugin-kafka@1.0.4) (2020-02-13)

**Note:** Version bump only for package @microfleet/plugin-kafka





## [1.0.3](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@1.0.2...@microfleet/plugin-kafka@1.0.3) (2020-02-05)


### Bug Fixes

* correct interfaces + extra types ([#387](https://github.com/microfleet/core/issues/387)) ([b5bed27](https://github.com/microfleet/core/commit/b5bed27fb9ca095cda0950e89a9ad831d23b2695))





## [1.0.2](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@1.0.1...@microfleet/plugin-kafka@1.0.2) (2020-01-24)

**Note:** Version bump only for package @microfleet/plugin-kafka





## [1.0.1](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@1.0.0...@microfleet/plugin-kafka@1.0.1) (2020-01-21)


### Bug Fixes

* package.json missing section ([#381](https://github.com/microfleet/core/issues/381)) ([915202b](https://github.com/microfleet/core/commit/915202b1f4465b72e1b1469b9aca471c9434f1c6))





# [1.0.0](https://github.com/microfleet/core/compare/@microfleet/plugin-kafka@0.2.0...@microfleet/plugin-kafka@1.0.0) (2020-01-21)


### Features

* upgrade all deps ([#380](https://github.com/microfleet/core/issues/380)) ([0e12454](https://github.com/microfleet/core/commit/0e12454cd78982eaaa77ea68a9fe6597404b702e))


### BREAKING CHANGES

* requires node 12+, uses @hapi/joi 17, @hapi/hapi 19, ms-conf & @makeomatic/confidence updates.
That would potentially require changes to service deployments





# 0.2.0 (2020-01-20)


### Features

* streaming based kafka plugin ([#362](https://github.com/microfleet/core/issues/362)) ([d82cda7](https://github.com/microfleet/core/commit/d82cda7b8d6ccbb2edd9129d5073188394fd4cf3))
