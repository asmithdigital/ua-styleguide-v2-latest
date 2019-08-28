module.exports = {

  JS_DEPS: [
    'src/assets/js/vendor/modernizr.js',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/motion-ui/dist/motion-ui.min.js',
    'node_modules/what-input/dist/what-input.min.js',
    'node_modules/corejs-typeahead/dist/typeahead.bundle.min.js',
    'node_modules/foundation-sites/dist/js/foundation.min.js',
    'node_modules/swipebox/src/js/jquery.swipebox.min.js',
    'node_modules/jquery-ui-dist/jquery-ui.min.js'
  ],
  JS_POLLYFILLS: [
    './node_modules/picturefill/dist/picturefill.min.js',
    './node_modules/mediaelement/build/mediaelement-and-player.js',
    './node_modules/mediaelement/build/mediaelementplayer.css',
    './node_modules/mediaelement/build/mejs-controls.svg'
  ],
  JS_DOCS: [
    'node_modules/clipboard/dist/clipboard.min.js',
    'node_modules/foundation-docs/js/**/*.js'
  ],
  SASS_DOC_PATHS: [
    'scss',
    'node_modules/motion-ui/src',
    'node_modules/foundation-docs/scss'
  ],
  SASS_LINT_FILES: [
    'src/scss/**/*'
  ],
  JS_FILES: [
    'src/js/*.js',
    'src/js/lib/**/*.js',
    '!src/js/ES5/*.js'
  ],
  VERSIONED_FILES: [
    'package.json',
    'src/data/global.yml'
  ]
};
