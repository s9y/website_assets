// Minify JS
module.exports = function(grunt) {
    grunt.config('uglify', {
        blog: {
            options: {
                sourceMap: true,
                sourceMapIn: 'blog/scripts/master.js.map'
            },
            files: {
                'dist/blog/scripts/master.js': ['blog/scripts/master.js']
            }
        },
        site: {
            options: {
                sourceMap: true,
                sourceMapIn: 'site/scripts/master.js.map'
            },
            files: {
                'dist/site/scripts/master.js': ['site/scripts/master.js']
            }
        },
        spartacus: {
            options: {
                sourceMap: true,
                sourceMapIn: 'spartacus/scripts/master.js.map'
            },
            files: {
                'dist/spartacus/scripts/master.js': ['spartacus/scripts/master.js']
            }
        }
    });
};
