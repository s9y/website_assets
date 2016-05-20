// Compile SCSS files to CSS
module.exports = function(grunt) {
    grunt.config('sass', {
        blog: {
            options: {
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
        }
    });
};
