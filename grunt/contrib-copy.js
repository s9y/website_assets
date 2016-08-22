// Copy files not copied by other tasks to deployment directory
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('copy', {
        site: {
            files: [{
                expand: true,
                cwd: 'node_modules',
                src: config.init.site.src,
                dest: config.init.site.dest
            }]
        },
        spartacus: {
            files: [{
                expand: true,
                cwd: 'node_modules',
                src: config.init.spartacus.src,
                dest: config.init.spartacus.dest
            }]
        },
        build: {
            files: [{
                expand: true,
                cwd: '.',
                src: config.copy.src,
                dest: config.copy.dest
            }]
        }
    });
};
