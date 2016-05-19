// Grunt configuration
module.exports = {
    autoprefixer: {
        browsers:   ['> 1%', 'last 2 versions']
    },
    concat: {
        src: [
                    'node_modules/responsive-nav/responsive-nav.js',
                    'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
                    'site/scripts/jquery.jfeed.js',
                    'site/scripts/main.js'
              ],
        dest:       'site/scripts/master.js'
    },
    copy: {
        src: [
                    'site/scripts/jquery/dist/jquery.min.js',
                    'site/scripts/jquery/dist/jquery.min.map',
                    'site/scripts/modernizr/modernizr.js'
              ],
        dest:       'dist'
    },
    init: {
        src: [
                    'jquery/dist/jquery.min.js',
                    'jquery/dist/jquery.min.map'
              ],
        dest:       'site/scripts'
    }
};
