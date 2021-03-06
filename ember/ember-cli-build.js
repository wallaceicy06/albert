/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('bower_components/jquery/dist/jquery.js');

  /* UIKit imports */
  app.import('bower_components/uikit/css/uikit.almost-flat.css');
  app.import('bower_components/uikit/fonts/fontawesome-webfont.woff', {
    destDir: 'fonts'
  });
  app.import('bower_components/uikit/fonts/fontawesome-webfont.woff2', {
    destDir: 'fonts'
  });

  app.import('bower_components/uikit/css/components/autocomplete.almost-flat.css');
  app.import('bower_components/uikit/js/uikit.js');
  app.import('bower_components/uikit/js/components/autocomplete.js');

  app.import('bower_components/uikit/css/components/sticky.almost-flat.css');
  app.import('bower_components/uikit/js/components/sticky.js');


  return app.toTree();
};
