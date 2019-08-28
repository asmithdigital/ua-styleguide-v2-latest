import FontFaceObserver from '../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js';
import 'core-js/es6/promise';
import {cookie} from './cookie';

/*
 Fonts are loaded through @font-face rules in the CSS whenever an element references them.
 FontFaceObserver creates a referencing element to trigger the font request, and lsisten for font load events.
 When all 3 fonts are loaded, we enable them by adding a class to the html element
 */
(function(w) {

  // if the class is already set, we're good.
  if (document.documentElement.className.indexOf( "fonts-loaded" ) > -1 ) {
    return;
  }

  let fontA = new FontFaceObserver( "Crimson Text Italic", {
    weight: 400,
    style: 'italic'
  });

  let fontB = new FontFaceObserver( "Open Sans", {
    weight: 400
  });

  let fontC = new FontFaceObserver( "Bureau Grotesque Three Seven");

  let fontD = new FontFaceObserver( "Oswald", {
    weight: 700
  });

  w.Promise
    .all([fontA.load(), fontB.load(), fontC.load(), fontD.load()])
    .then(function(){
      w.document.documentElement.className += " fonts-loaded";
      cookie( "fonts-loaded", "true", 2017);
    }, function (e) {
      console.log('Fonts error ', e);
    });

})(window);
