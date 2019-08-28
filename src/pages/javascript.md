---
title: JavaScript
description: Documentation for JavaScript.
---

## Manually referencing JavaScript

When implementing plugins for each component manually, you can find each of the individual js plugins within the `js/dist/plugins` directory. 

Along with the particular plugin which is required for a component you will also need to include the particular dependencies for the component.

In order to determine which plugins and dependencies are required for each component, you can reference the **JavaScript** section within each particular component page within the style guide V2. There is a `js` icon next to the menu item on the left of this style guide V2 to indicate which components have JavaScript dependencies. 

## Global JavaScript dependencies

When building your own custom implementation and build of the style guide V2 JavaScript plugins you will not only need to reference the plugins and dependencies which are listed on the particular component page, but you will also need to reference the Global dependencies which are required for every component. These are as follows:
 
 - `js/vendor/modernizr.js`
 - `js/vendor/jquery.min.js`
 - `js/vendor/foundation.min.js`
 - `js/vendor/what-input.min.js`
 - `js/vendor/motion-ui.min.js`
