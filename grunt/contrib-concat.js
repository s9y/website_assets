// Concatenate JS assets into single file
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('concat', {
        options: {
            sourceMap: true
        },
        blog: {
            src: config.concat.blog.src,
            dest: config.concat.blog.dest
        },
        site: {
            src: config.concat.site.src,
            dest: config.concat.site.dest
        }
    });
};
