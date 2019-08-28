---
title: The base structure
description: Documentation for the base HTML structure.
---

## Base structure

The base structure includes the `<head>` section of the page and also the elements which wrap the base grid system.

The [base grid system](grid.html) sits in the position where you see the comment `<!-- Base grid goes here -->` in the example below.

The search component is loaded dynamically as described on the [global assets page](global-assets.html).

```html
<!doctype html>
<!--[if IE 9]><html class="lt-ie10" lang="en" > <![endif]-->
<html class="no-js" lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <link rel="icon" href="assets/img/icons/apple-touch-icon-144-precomposed.png" type="image/x-icon">
  <title>Page title | University of Adelaide Style guide</title>
  <!--[if gt IE 8]><!-->
  <link href="assets/css/app.css" rel="stylesheet">
  <!--<![endif]-->
</head>
<body class="ua-standard">
  <div class="o-off-canvas__wrapper">
    <div id="ua-search"></div> <!-- The search placeholder -->
    <div class="o-off-canvas__content" data-off-canvas-content>
     <!-- Base grid goes here -->
    </div>
  </div>
  <script src="assets/js/dist/app.jquery.js"></script>
  </body>
</html>
```
