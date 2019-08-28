// This code is copied from the following js plugin files from SG V1 and combined temporarily:
// - js/plugins/ua-ext-icons.js
// - js/plugins/ua-linkie.js

// TODO: This needs to be written as ES6 module and also needs more work for exclude custom domains

(function ($) {

  var externalLinkClass = 'fa-external-link';
  var newWindowIconClass = 'fa-window-restore';
  var excludeIconsClass = 'js-hide-icon';
  var hiddenTextClass = 'u-hidden-text';
  
  var hostnameString = location.hostname.toLowerCase();
  var excludeExternalLink = ['adelaide.edu.au']; // needs to be able to be customised
  // var includeExternalLink = []

  var fileIconExtensions = ['pdf', 'doc', 'docx', 'xls', 'xlsx'];
  var fileLinkSelectors = fileIconExtensions.map(function (type) {
    return '.o-layout__main a[href$=".' + type + '"]';
  });

  // File extensions icons.
  // ========================
  $(fileLinkSelectors.join()).each(function () {
    var extension = $(this).attr('href').split('.').pop();
    var spanClasses = ['fa-file-' + extension + '-o'];
    if ($(this).find('img').length || $(this).hasClass(excludeIconsClass)) {
      spanClasses.push(hiddenTextClass);
    }
    $(this).append(' <i class="fa fa-ext fa-fw ' + spanClasses.join(' ') + '" aria-hidden="true"></i>');
  });

  // New window icon.
  // ========================
  $('.o-layout__main a[target="_blank"]').each(function () {
    var spanClasses = [newWindowIconClass];
    if ($(this).find('img').length || $(this).hasClass(excludeIconsClass)) {
      spanClasses.push(hiddenTextClass);
    }
    $(this).append(' <i class="fa fa-ext fa-fw ' + spanClasses.join(' ') + '" aria-hidden="true"></i>');
  });

  // External link icon.
  // ========================
  $('.o-layout__main a[href^="http"], .o-layout__main a[href^="//"]').each(function () {
    var href = $(this).attr('href');
    var isExternalLinkInHref = true;
    var i;
    var len;

    for (i = 0, len = excludeExternalLink.length; i < len; i++) {
      if (href.indexOf(excludeExternalLink[i]) > -1) {
        isExternalLinkInHref = false;
        break;
      }
    }

    // for (i = 0, len = includeExternalLink.length; i < len; i++) {
    //   if (href.indexOf(includeExternalLink[i]) > -1) {
    //     isExternalLinkInHref = true;
    //     break;
    //   }
    // }

    if (href.indexOf(hostnameString) < 0 && isExternalLinkInHref === true) {
      let spanClasses = [externalLinkClass];
      if ($(this).find('img').length || $(this).hasClass(excludeIconsClass)) {
        spanClasses.push(hiddenTextClass);
      }
      $(this).append(' <i class="fa fa-ext ' + spanClasses.join(' ') + '" aria-hidden="true"></i>');
    }
  });

})(jQuery);
