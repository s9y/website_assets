// Grunt configuration
module.exports = {
    autoprefixer: {
        browsers:   ['> 1%', 'last 2 versions']
    },
    concat: {
        blog: {
            src: [
                    'node_modules/responsive-nav/responsive-nav.js',
                    'blog/scripts/main.js'
                  ],
            dest:   'blog/scripts/master.js'
        },
        site: {
            src: [
                    'node_modules/responsive-nav/responsive-nav.js',
                    'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
                    'site/scripts/jquery.jfeed.js',
                    'site/scripts/main.js'
                  ],
            dest:   'site/scripts/master.js'
        },
        spartacus: {
            src: [
                    'node_modules/responsive-nav/responsive-nav.js',
                    'spartacus/scripts/main.js'
                  ],
            dest:   'spartacus/scripts/master.js'
        }
    },
    copy: {
        src: [
                    'blog/scripts/modernizr/modernizr.js',
                    'site/scripts/jquery/dist/jquery.min.js',
                    'site/scripts/jquery/dist/jquery.min.map',
                    'site/scripts/modernizr/modernizr.js',
                    'spartacus/scripts/jquery/dist/jquery.min.js',
                    'spartacus/scripts/jquery/dist/jquery.min.map',
                    'spartacus/scripts/modernizr/modernizr.js'
              ],
        dest:       'dist'
    },
    init: {
        site: {
            src: [
                        'jquery/dist/jquery.min.js',
                        'jquery/dist/jquery.min.map'
                  ],
            dest:       'site/scripts'
        },
        spartacus: {
            src: [
                        'jquery/dist/jquery.min.js',
                        'jquery/dist/jquery.min.map'
                  ],
            dest:       'spartacus/scripts'
        }
    }
};
