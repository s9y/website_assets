module.exports = function(grunt) {
    // Load tasks when needed
    require('jit-grunt')(grunt);

    // Use time-grunt
    require('time-grunt')(grunt);

    // Initialize config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    });

    // Load required tasks from submodules
    grunt.loadTasks('grunt');

    // Default task
    grunt.registerTask('default', ['build']);

    grunt.registerTask('build', [
        'clean',
        'copy:build',
        'concat',
        'sass',
        'postcss:build',
        'uglify'
    ]);
};
