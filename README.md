# s9y website assets

[![Dependency Status](https://david-dm.org/s9y/website_assets.svg)](https://david-dm.org/s9y/website_assets)
[![devDependency Status](https://david-dm.org/s9y/website_assets/dev-status.svg)](https://david-dm.org/s9y/website_assets#info=devDependencies)

**Important:** Note that this is very much work in progress, including the documentation as to how to create a build and distribute the created files. For the time being, if you need a new build, please ping [@yellowled](https://github.com/yellowled).

## Quickstart

You'll need [node.js](http://nodejs.org) and [Grunt](http://gruntjs.com). Clone the repository, do `npm i` in the project directory and run `grunt` to start the build script.

This will create new builds of the CSS and JS assets for the various s9y sites (currently, just for the web site and blog theme; later, also for the forum theme and spartacus).

## What to do with the build

The build is created in the (new) directory `dist/` in the repository's directory. The files relate to other s9y repositories as follows:

* `dist/blog/style.css` → `style.css` in https://github.com/s9y/theme_blog
* `dist/blog/scripts/` → `scripts` in https://github.com/s9y/theme_blog
* `dist/site/css/` → `css/` in https://github.com/s9y/s9y.github.io
* `dist/site/scripts/` → `scripts/` in https://github.com/s9y/s9y.github.io

(Please do **not** copy build files to `theme_blog` yet.)
