---
title: Global assets
description: Documentation for global assets.
static-demo: static-global-assets-loader
---

**Mega menu, search, quick links menu and global footer**

The mega menu, search, quick links menu and global footer form the global assets that are required to be loaded dynamically from the web team servers for all web sites and web applications.
 
The mega menu, search, quick links menu and footer assets are pulled in via AJAX JavaScript client side, injected into the DOM and the JavaScript for functionality 
executed.
 
The markup that is required to be dynamically loaded, as documented below, is hosted at  `global.adelaide.edu.au` - a domain that is controlled by the 
web team at marketing and communications. The web team control the content and assets that make up the mega menu, search, quick links menu and global footer, so that it is centrally controlled and all sites/applications that are consuming these assets can be updated automatically. 

## CSS references

The following CSS reference is required in your web site or web application in order to style the mega menu, search, quick links menu and global footer.

If you are looking for the header and footer template CSS, please download the header footer template from the [getting started page](getting-started.html).

```html
<link href="//global.adelaide.edu.au/style-guide-v2/latest/css/global-assets.css" rel="stylesheet">
```

## JavaScript dependencies
 
If you are using the entire style guide functionality and wish to add the global assets loader plugin functionality to your website or web application, then please add the `app.jquery.js` to your HTML as per the instructions on the [getting started page](getting-started.html), before continuing with the remaining instructions on this page.

If you plan to use the header and footer template then please download the header and footer template from the header and footer section of the [getting started page](getting-started.html). The header and footer template already has the global assets functionality built into the template.

If you wish to apply your own custom JavaScript dependency management strategy, and do not plan to use the above mentioned `app.jquery.js` reference, then please read the instructions on the [JavaScript page](javascript.html). This will describe exactly which global JavaScript dependencies are required for your application, before continuing with the remaining instructions on this page..

## Global assets loader dependency

The following JavaScript plugin must be loaded into your web site or web application below the above mentioned JavaScript dependencies. The `global-assets-loader.js` file is the loader plugin which is required in order to dynamically load the mega menu, search, quick links menu and global footer HTML, as mentioned above, via AJAX, and then also provide the drop down menu functionality for the search, quick links menu and mega menu.
 
```html
<script src="//global.adelaide.edu.au/style-guide-v2/latest/js/plugins/global-assets-loader.js"></script>
```

## Execute global assets loader

To use the mega menu loader plugin you need to include the following JavaScript, as seen in the example below, into the HTML output of your website or application and must be placed below the above mentioned mega menu plugin. This code specifies the paths and DOM id selectors to attach the page partials to. 

```html
 <script>
   var _globalassets = new GlobalAssetsLoader({
     "quicklinks": {
       "path": "//global.adelaide.edu.au/v/style-guide2/includes/common/static-quicklinks-menu.html",
       "selector": "ua-header-quicklinks"
     },
     "search": {
       "path": "//global.adelaide.edu.au/v/style-guide2/includes/common/static-search.html",
       "selector": "ua-search"
     },
     "megamenu": {
       "path": "//global.adelaide.edu.au/v/style-guide2/includes/common/static-mega-menu.html",
       "selector": "ua-mega-menu"
     },
     "footer": {
       "path": "//global.adelaide.edu.au/v/style-guide2/includes/common/static-global-footer.html",
       "selector": "ua-footer"
     }
   });
 </script>
```

## Local testing

For testing this somewhere other than an `adelaide.edu.au` domain you will need to host the files locally/internally on your own server and set the path to them as seen in the example below.

```html
<script>
  if (window.location.origin.indexOf('adelaide.edu.au') > -1) {
    var _globalassets = new GlobalAssetsLoader({
      "quicklinks": {
        "path": "//global.adelaide.edu.au/v/style-guide2/includes/common/static-quicklinks-menu.html",
        "selector": "ua-header-quicklinks"
      },
      "search": {
        "path": "//global.adelaide.edu.au/v/style-guide2/includes/common/static-search.html",
        "selector": "ua-search"
      },
      "megamenu": {
        "path": "//global.adelaide.edu.au/v/style-guide2/includes/common/static-mega-menu.html",
        "selector": "ua-mega-menu"
      },
      "footer": {
        "path": "//global.adelaide.edu.au/v/style-guide2/includes/common/static-global-footer.html",
        "selector": "ua-footer"
      }
    });
  } else {
    var _globalassets = new GlobalAssetsLoader({
      "quicklinks": {
        "path": "/partials/static-quicklinks-menu.html",
        "selector": "ua-header-quicklinks"
      },
      "search": {
        "path": "/partials/static-search.html",
        "selector": "ua-search"
      },
      "megamenu": {
        "path": "/partials/static-mega-menu.html",
        "selector": "ua-mega-menu"
      },
      "footer": {
        "path": "/partials/static-global-footer.html",
        "selector": "ua-footer"
      }
    });
  }
</script>
```

## Same server use

If you opt to not fetch the assets from the client side (fetch from server side or other method) or do no wish to use the `global-assets-loader.js` you can simply include the global assets plugin file, which will provide the drop down functionality for the mega menu, search and quick links menu.

### Global assets plugin

```html
<script src="//global.adelaide.edu.au/style-guide-v2/latest/js/plugins/global-assets-plugin.js"></script>
```

### Execute global assets plugin

```html
<script>
var _globalassets = new GlobalAssets({ megamenu : '#ua-mega-menu',  quicklinks : '#ua-header-quicklinks', search: '#ua-search'});
</script>
```

<div class="alert callout">
<p>**Note:** Notice the logic to check for the `adelaide.edu.au` domain - this is one way you can detect a UAT or production environment versus a development or local environment.</p>
</div>

## Troubleshooting 

If you are receiving a 403 error stating that Cross Origin Resource sharing is not supported then you will need to [contact 
the web team](//www.adelaide.edu.au/webguide/help/) to get your domain white listed so you are able to fetch from `//global.adelaide.edu.au`
