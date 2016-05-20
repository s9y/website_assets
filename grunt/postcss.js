// Postprocess generated CSS
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('postcss', {
        blog: {
            options: {
                diff: false,
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: config.autoprefixer.browsers,
                        cascade: false,
                        remove: true
                    }),
                    require('pixrem')({
                        atrules: true,
                        unitPrecision: 0
                    }),
                    require('css-mqpacker')({
                        sort: true
                    }),
                    require('cssnano')()
                ]
            },
            files: [{
                expand: true,
                flatten: true,
                src: 'blog/*.css',
                dest: 'dist/blog'
            }]
        },
        site: {
            options: {
                diff: false,
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: config.autoprefixer.browsers,
                        cascade: false,
                        remove: true
                    }),
                    require('pixrem')({
                        atrules: true,
                        unitPrecision: 0
                    }),
                    require('css-mqpacker')({
                        sort: true
                    }),
                    require('cssnano')()
                ]
            },
            files: [{
                expand: true,
                flatten: true,
                src: 'site/css/*.css',
                dest: 'dist/site/css'
            }]
        },
        lint: {
            options: {
                writeDest: false,
                syntax: require('postcss-scss'),
                processors: [
                    require('stylelint')(),
                    require('postcss-reporter')({
                        clearMessages: true
                    })
                ]
            },
            files: [{
                expand: true,
                cwd: '.',
                src: [
                    'sass/base/*.scss',
                    'sass/mixins/*.scss',
                    'sass/modules/*.scss',
                    'sass/settings/*.scss',
                    'blog/*.scss',
                    'site/css/*.scss'
                ]
            }]
        }
    });
};
