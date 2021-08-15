# Nekomata-ui

<p>
  <a href="https://www.npmjs.com/package/nekomata-ui">
    <img alt="npm" src="https://img.shields.io/npm/v/nekomata-ui?color=brightgreen&style=plastic">
  </a>
  <a href="https://github.com/open-anthro-projects/nekomata-ui/blob/main/LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/open-anthro-projects/nekomata-ui?style=plastic">
  </a>
</p>

**Currently in development**

Nekomata-ui is an UI framework / component library build with Svelte that focuses on delivering components and features that can be adaptable to your application needs. 

This framework/library is being build with the idea that you can follow any set of design guidelines/philosophies to reach the design you want for your application. This means there is no enforcement into certain design guidelines/philosophies by Nekomata-ui. 

### Nekomata-ui tries to be that by:

* Exporting CSS custom properties (variables) from our components which can be used to alter how they work on the screen. 
* Components are not build with pre-defined media queries or a dependency to a store with breakpoints. (The aim is to have components with profiles (css classes) that you can alter and set from the outside)

***
### Installation

```bash
npm install --save-dev nekomata-ui
```

## Components:
- AppBar
- Row
- GridContainer (initial version)
- SvgIcon
- Drawer (initial modal version)

## Utils:
- styleStringBuilder (Turning an object into a css style string)

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

New ideas and improvements are very welcome and will help the framework/library grow. See [contributing](https://github.com/open-anthro-projects/nekomata-ui/blob/main/CONTRIBUTING.md) how you can contribute.

### Climate policy

Nekomata-ui is very concerned about the climate. For this reason, packages that are one year old will be given the deprecated status and then removed from services such as NPM after six months. (Only applicable to services on which nekomata-ui releases were released directly)

## Changelog:
- 0.2.0: 
  styleStringBuilder added. 
  CSS media queries removed from the components. 
  Rewrite of the CSS custom properties to make them more unique. 
  Every component now has a type interface that can be used to make an object. This can be used by the styleStringBuilder to make a css style string for a component. 
  All components now have an id attribute that can be set. Which makes it possible to navigate to the component and to target the component from the outside by JavaScript and CSS.
  All components now have and data_testid that can used to set and testId for the Svelte testing library.
- 0.1.8: (modal) drawer added without backdrop (initial version).
- 0.1.7: CssStyleString changed to $: style.
- 0.1.6: SvgIcon test fixes and package structure changes.
- 0.1.5: Fix package.json export.
- 0.1.3: $$restProps.class changed to a clazz as class export.
- 0.1.1: Custom style prop added to components.
- 0.1.0: SvgIcon added and a few fixes.
- 0.0.8: GridContainer (initial version) added.
- 0.0.7: Row component added.
- 0.0.4: Initial AppBar component added.
- 0.0.3: themeStore export bug fixed. 
- 0.0.2: themeStore added. 
