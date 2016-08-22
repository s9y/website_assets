// Check JS assets for code quality
module.exports = function(grunt) {
    grunt.config('jshint', {
        options: {
            jshintrc: true
        },
        all: ['gruntfile.js',
              'config.js',
              'grunt/*.js',
              'blog/scripts/main.js',
              'site/scripts/main.js',
              'spartacus/scripts/main.js']
    });
};
