// Compile SCSS files to CSS
const sass = require('node-sass');

module.exports = function(grunt) {
    grunt.config('sass', {
        blog: {
            options: {
                implementation: sass,
                outputStyle: 'nested',
                precision: 5,
                sourceMap: true
            },
            files: [{
                expand: true,
                cwd: 'blog',
                src: ['*.scss'],
                dest: 'blog',
                ext: '.css'
            }]
        },
        site: {
            options: {
                implementation: sass,
                outputStyle: 'nested',
                precision: 5,
                sourceMap: true
            },
            files: [{
                expand: true,
                cwd: 'site/css',
                src: ['*.scss'],
                dest: 'site/css',
                ext: '.css'
            }]
        },
        spartacus: {
            options: {
                implementation: sass,
                outputStyle: 'nested',
                precision: 5,
                sourceMap: true
            },
            files: [{
                expand: true,
                cwd: 'spartacus/css',
                src: ['*.scss'],
                dest: 'spartacus/css',
                ext: '.css'
            }]
        }
    });
};
