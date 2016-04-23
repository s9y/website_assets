// Minify JS
module.exports = function(grunt) {
    grunt.config('uglify', {
        options: {
            sourceMap: true,
            sourceMapIn: 'site/scripts/master.js.map'
        },
        deploy: {
            src: 'site/scripts/master.js',
            dest: 'dist/site/scripts/master.js'
        }
    });
};
