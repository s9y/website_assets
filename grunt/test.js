// Testing
module.exports = function(grunt) {
    grunt.registerTask('test', [
        'jshint',
        'postcss:lint'
    ]);
};
