# s9y website assets

[![Dependency Status](https://david-dm.org/s9y/website_assets.svg)](https://david-dm.org/s9y/website_assets)
[![devDependency Status](https://david-dm.org/s9y/website_assets/dev-status.svg)](https://david-dm.org/s9y/website_assets#info=devDependencies)

**Important:** Note that this is work in progress, including the documentation as to how to create a build and distribute the created files. For the time being, if you need help with a new build, please ping [@yellowled](https://github.com/yellowled).

## Quickstart

You'll need [node.js](http://nodejs.org) and [Grunt](http://gruntjs.com). Clone the repository, do `npm i` in the project directory and run `grunt` to start the build script.

This will create new builds of the CSS and JS assets for various s9y sites (currently for web site, blog theme and spartacus, but _not_ for the forum theme).

## What to do with the build

The build is created in the (new) directory `dist/` in the repository's directory. The files relate to other s9y repositories as follows (see note below):

- `dist/blog/style.css` → `style.css` in https://github.com/s9y/theme_blog
- `dist/blog/fonts/` → `fonts` in https://github.com/s9y/theme_blog [*]
- `dist/blog/scripts/` → `scripts` in https://github.com/s9y/theme_blog
- `dist/site/css/` → `css/` in https://github.com/s9y/s9y.github.io
- `dist/site/fonts/` → `fonts/` in https://github.com/s9y/s9y.github.io [*]
- `dist/site/scripts/` → `scripts/` in https://github.com/s9y/s9y.github.io
- `dist/spartacus/css/` → `homepage/css/` in https://github.com/s9y/additional_plugins
- `dist/spartacus/fonts/` → `homepage/fonts/` in https://github.com/s9y/additional_plugins [*]
- `dist/spartacus/scripts/` → `homepage/scripts/` in https://github.com/s9y/additional_plugins

1. Please also copy the respective `.map` files.
2. [*] The `fonts/` directories should almost never change.

## Linting

Please note that you can (and should) lint your changes by using `grunt test` in the project directory. This will test project assets which do not belong to 3rd-party assets using [jshint](http://jshint.com) for JS and [stylelint](http://stylelint.io) for SCSS.

## Updating jQuery

jQuery is managed through `package.json`, but there is currently no task to copy an updated version of it from `node_modules/jquery/dist` to the directories for the sites that need it. So in case of an update to jQuery, for the time being the files

- `node_modules/jquery/dist/jquery.min.js`
- `node_modules/jquery/dist/jquery.min.map`

**both** need to be copied to

- `site/scripts/jquery/dist/` and
- `spartacus/scripts/jquery/dist/`

(It's not _super_ dramatic to forget that since both sites use CDN versions of jQuery, the bundled ones are only fallbacks.)
