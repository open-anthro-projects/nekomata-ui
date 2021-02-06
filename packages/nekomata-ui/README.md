<h1 align="center">Nekomata-ui</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/nekomata-ui">
    <img alt="npm" src="https://img.shields.io/npm/v/nekomata-ui?color=brightgreen&style=plastic">
  </a>
  <a href="https://github.com/open-anthro-projects/nekomata-ui/blob/main/LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/open-anthro-projects/nekomata-ui?style=plastic">
  </a>
</p>

**Currently in development**

Nekomata-ui is an UI framework build with Svelte that aims to be a radical new approach for UI frameworks like how Svelte works in comparison to traditional frameworks like React and Vue.

### Nekomata-ui tries to be that by:

* Focusing on the freedom to adapt things to your own needs in the components. (Nekomata-ui takes inspiration from other frameworks and UI designs for its components but does not enforce that the ideas behind it are followed)
* Only using CSS3 without any external library.
* Going forward instead of looking back. (Implementing new specifications if the browser support is around 80/90% and by not offering support for outdated browsers IE11)

***
### Installation

```bash
npm install --save-dev nekomata-ui
```

## Components
- AppBar
- Row
- GridContainer (initial version)

Check the [wiki](https://github.com/open-anthro-projects/nekomata-ui/wiki) for more information about the components. 
This will change when there is a site.

## Features:
- themeStore
    - For switching the theme from light to dark and the other way around.
    - Uses the Local Storage from the browser to store the state between visits.
    - Make the page load without visible theme switching onload (see flash going from light to dark)

Check the [wiki](https://github.com/open-anthro-projects/nekomata-ui/wiki) for more information about the features. 
This will change when there is a site.

### Code coverage:

| Nekomata-ui | Unit tests (dev) | Unit tests | Integration tests |
|:-:|:-:|:-:|:-:|
| Components| [![codecov](https://codecov.io/gh/open-anthro-projects/nekomata-ui/branch/main/graph/badge.svg?token=N5XLUK9L31)](https://codecov.io/gh/open-anthro-projects/nekomata-ui) | - | - |
| Features | - | - | - |

### Contributing
**Currently in development**

Ideas for contributing are welcome.

### Climate policy

Nekomata-ui is very concerned about the climate. For this reason, packages that are one year old will be given the deprecated status and then removed from services such as NPM after six months. (Only applicable to services on which nekomata-ui releases were released directly)

## Changelog:
- 0.0.9: SvgIcon added and a few fixes.
- 0.0.8: GridContainer (initial version) added.
- 0.0.7: Row component added.
- 0.0.4: Initial AppBar component added.
- 0.0.3: themeStore export bug fixed. 
- 0.0.2: themeStore added. 