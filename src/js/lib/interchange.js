(function($) {

  // Get the media query styles string and parse to object
  const extractedStyles = $('.foundation-mq').css('font-family');
  let namedQueries;
  namedQueries = parseStyleToObject(extractedStyles);

  // Define new custom queries to be used interchange elements
  Foundation.Interchange.SPECIAL_QUERIES.smallRetina = buildMediaQueryString(namedQueries.small);
  Foundation.Interchange.SPECIAL_QUERIES.mediumRetina = buildMediaQueryString(namedQueries.medium);
  Foundation.Interchange.SPECIAL_QUERIES.largeRetina = buildMediaQueryString(namedQueries.large);
  Foundation.Interchange.SPECIAL_QUERIES.xlargeRetina = buildMediaQueryString(namedQueries.xlarge);
  Foundation.Interchange.SPECIAL_QUERIES.xxlargeRetina = buildMediaQueryString(namedQueries.xxlarge);

  // Build the size and retina media query string
  function buildMediaQueryString(minWidth) {
    return 'only screen and (min-width: ' + minWidth + ') and (-webkit-min-device-pixel-ratio: 2), only screen and (min-width: ' + minWidth + ') and (min--moz-device-pixel-ratio: 2), only screen and (min-width: ' + minWidth + ') and (-o-min-device-pixel-ratio: 2/1), only screen and (min-width: ' + minWidth + ') and (min-device-pixel-ratio: 2), only screen and (min-width: ' + minWidth + ') and (min-resolution: 192dpi), only screen and (min-width: ' + minWidth + ') and (min-resolution: 2dppx)';
  }

  // Thank you: https://github.com/sindresorhus/query-string
  function parseStyleToObject(str) {
    let styleObject = {};

    if (typeof str !== 'string') {
      return styleObject;
    }

    str = str.trim().slice(1, -1); // browsers re-quote string style values

    if (!str) {
      return styleObject;
    }

    styleObject = str.split('&').reduce(function(ret, param) {
      const parts = param.replace(/\+/g, ' ').split('=');
      let key = parts[0];
      let val = parts[1];
      key = decodeURIComponent(key);

      // missing `=` should be `null`:
      // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
      val = val === undefined ? null : decodeURIComponent(val);

      if (!ret.hasOwnProperty(key)) {
        ret[key] = val;
      } else if (Array.isArray(ret[key])) {
        ret[key].push(val);
      } else {
        ret[key] = [ret[key], val];
      }
      return ret;
    }, {});

    return styleObject;
  }

  // Activate Foundation on interchange elements
  $('.js-interchange').foundation();

})(jQuery);

