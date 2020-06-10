# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [5.8.0](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-twbs@5.7.0...@ecomplus/storefront-twbs@5.8.0) (2020-06-02)


### Features

* **js-env:** export env info by user agent and screen size ([6e6974b](https://github.com/ecomplus/storefront/commit/6e6974ba43973240d7fb426254e6438275ea319c))





# [5.7.0](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-twbs@5.6.0...@ecomplus/storefront-twbs@5.7.0) (2020-06-02)


### Features

* **scss:** add progress bootstrap default component ([7dd8d43](https://github.com/ecomplus/storefront/commit/7dd8d4302013887ae0b3d750104eb50653ef9ba8))





# [5.6.0](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-twbs@5.5.0...@ecomplus/storefront-twbs@5.6.0) (2020-05-28)


### Features

* **icons:** add 'fa-telegram' icon ([d92eb6a](https://github.com/ecomplus/storefront/commit/d92eb6a74d22bd4ecaed0f233c1e9fb612acd165))
* **icons:** add fa-forward icon ([08f210e](https://github.com/ecomplus/storefront/commit/08f210eb12e6046d92c95d0744e5809ea24f404f))





# [5.5.0](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-twbs@5.4.2...@ecomplus/storefront-twbs@5.5.0) (2020-05-14)


### Features

* **bootstrap:** updating to bootstrap v4.5.0 ([22e94fb](https://github.com/ecomplus/storefront/commit/22e94fbd335d8e8f1fc9640a92fce55b40fa4610))





## [5.4.2](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-twbs@5.4.1...@ecomplus/storefront-twbs@5.4.2) (2020-05-05)

**Note:** Version bump only for package @ecomplus/storefront-twbs





## [5.4.1](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-twbs@5.4.0...@ecomplus/storefront-twbs@5.4.1) (2020-04-16)


### Bug Fixes

* **deps:** bootstrap 4.4.1 not compatible with jquery 3.5.0 ([06c314a](https://github.com/ecomplus/storefront/commit/06c314a2c68d84d80fa68d38bb575b708268f0ab))





# [5.4.0](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-twbs@5.3.2...@ecomplus/storefront-twbs@5.4.0) (2020-04-16)


### Bug Fixes

* **animate-css:** add timer fallback (animationend event is unstable) ([5038b18](https://github.com/ecomplus/storefront/commit/5038b18fae7091d224a2350c923ded5f8a6b786f))


### Features

* **scss:** add new --font-headings css var ([47ac3b6](https://github.com/ecomplus/storefront/commit/47ac3b66e31fe0f4817462a68a3759df66a10561))





## [5.3.2](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-twbs@5.3.1...@ecomplus/storefront-twbs@5.3.2) (2020-04-03)


### Bug Fixes

* **scss:** edit default container width (too large) to 1400px ([b863298](https://github.com/ecomplus/storefront/commit/b863298f324de0825165fa349e87fb4c21392eaa))


### Reverts

* **scss:** keep default bootstrap containers at all ([4a51583](https://github.com/ecomplus/storefront/commit/4a51583e8ea4424d46c84dde96fca0dc07b15a23))





## [5.3.1](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-twbs@5.3.0...@ecomplus/storefront-twbs@5.3.1) (2020-03-30)


### Bug Fixes

* **js:** prevent ssr error with window object ([b690aec](https://github.com/ecomplus/storefront/commit/b690aec4d91ddcc03c314190248fec3b4c3d1a7a))
* **pkg:** fix entry files, no module entry ([82f2ea3](https://github.com/ecomplus/storefront/commit/82f2ea38ad5c9c8eaf2a7b6ae0228898422093ec))





# [5.3.0](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-twbs@5.2.0...@ecomplus/storefront-twbs@5.3.0) (2020-03-28)


### Bug Fixes

* **scss:** minor hack to set container "almost fluid" ([6704477](https://github.com/ecomplus/storefront/commit/67044777fd3e6fa8982ec9aaa67246d49addcdd4))
* **scss:** pointer on checkbox and radio inputs ([5332991](https://github.com/ecomplus/storefront/commit/533299109af54ec1e5df90c52280dd3da216044a))


### Features

* **icon:** add faPlay fa icon ([40446f5](https://github.com/ecomplus/storefront/commit/40446f529866ae3dc2fbf892413c10b408eab366))
* **icons:** add faArrowDown and faWifi ([d6485f7](https://github.com/ecomplus/storefront/commit/d6485f75f70497670f17f8d92f95ec8f08b47161))
* **icons:** add times-circle to fa collection ([878a470](https://github.com/ecomplus/storefront/commit/878a470150eee76b32aa610c35fe9cb10d4c40a2))





# [5.2.0](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-twbs@5.1.0...@ecomplus/storefront-twbs@5.2.0) (2020-02-27)


### Bug Fixes

* **import:** import 'jquery' only, let webpack to alias to slim ([86bf632](https://github.com/ecomplus/storefront/commit/86bf63237bfd8e535de9a1a9f559e8bf6923b88e))


### Features

* **scss:** custom utilites (text and spacing helpers) ([f8dcdd8](https://github.com/ecomplus/storefront/commit/f8dcdd8e4efb23e15efbcca843358efbafc95907))
* **vars:** complete set of text css vars (fs, fw, ln) ([a50e81c](https://github.com/ecomplus/storefront/commit/a50e81c0179a3d463ba380364264c99faf6f0b52))


### Performance Improvements

* **vars:** removing unecessary --spacer-0 var ([0b4534f](https://github.com/ecomplus/storefront/commit/0b4534ff719b540afcab2179987133e87a4e1928))





# [5.1.0](https://github.com/ecomplus/storefront/compare/@ecomplus/storefront-twbs@5.0.1...@ecomplus/storefront-twbs@5.1.0) (2020-02-13)


### Bug Fixes

* **$:** set $ and jQuery globally (window) ([362160d](https://github.com/ecomplus/storefront/commit/362160dd4229bf51d860c6b48ba258c3a1b88a17))
* **jquery:** importing stable jquery slim ([9b7b3b8](https://github.com/ecomplus/storefront/commit/9b7b3b87a057d6d1a9127c9260e5ab09be40b846))
* **js:** imports with absolute path to support webpack aliases ([f7c66b2](https://github.com/ecomplus/storefront/commit/f7c66b2a2db0a265aa568b8a5ab1a94b612654e4))


### Features

* **animate-css:** utility function for effects with animate.css classes ([04f27ea](https://github.com/ecomplus/storefront/commit/04f27eab1f64f3c8f0b368e7825369b9a876b067))
* **exports:** export default $ ([7ccd7d9](https://github.com/ecomplus/storefront/commit/7ccd7d9530cdc02181015af9719af1de3978d20e))





## [5.0.1](https://github.com/ecomclub/storefront/compare/@ecomplus/storefront-twbs@5.0.0...@ecomplus/storefront-twbs@5.0.1) (2020-02-06)


### Bug Fixes

* **src:** fix source files path ([85b9b65](https://github.com/ecomclub/storefront/commit/85b9b6594d69a726c373fa72f7561ea04202f361))





# [5.0.0](https://github.com/ecomclub/storefront/compare/@ecomplus/storefront-twbs@5.0.0-beta.1...@ecomplus/storefront-twbs@5.0.0) (2020-02-05)

**Note:** Version bump only for package @ecomplus/storefront-twbs





# [5.0.0-beta.1](https://github.com/ecomclub/storefront/compare/@ecomplus/storefront-twbs@5.0.0-beta.0...@ecomplus/storefront-twbs@5.0.0-beta.1) (2020-02-05)

**Note:** Version bump only for package @ecomplus/storefront-twbs





# 5.0.0-beta.0 (2020-02-04)

**Note:** Version bump only for package @ecomplus/storefront-twbs


# Legacy Change Log

## [2.0.0-alpha.1~5.0.0-alpha.3](/LEGACY_CHANGELOGS/storefront-twbs/2.0.0-alpha.1~v5.0.0-alpha.3.md)
