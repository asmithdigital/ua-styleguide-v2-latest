---
title: Content layouts
description: Documentation for content layouts.
static-demo: static-standard-layout
---

## Content layouts

You can implement either the standard layout, full width standard layout or the campaign layout HTML within the base grid where you see the HTML comment `<!-- Main content layouts go here -->`, as seen on the [base grids page](grid.html).

Each of the following content layout examples below may contain the content grid system in the position where you see the HTML comment `<!-- Content grid -->`. Documentation for the content grid can be seen on the [content grid page](content-grid.html).

### Standard layout

The standard layout is comprised of a layout container which wraps both the main nav and the main content elements.

```html
<div class="o-layout__container">
  <div class="o-layout__main-nav">
    <!-- Site menu -->
  </div>
  <article class="o-layout__main-content" id="ua-main-content" role="main">
    <!-- Breadcrumb, Headings, paragraph, components etc -->
    <!-- Content grid -->
  </article>
</div>
```

### Full width layout

The full width layout uses the exact same markup as the above mentioned standard layout. It is used when you wish to have a full width content section `o-layout__main-content`, and have the site menu hidden off screen. The site menu then becomes visible by sliding into view only when the menu icon (which sits within the site title component) is clicked.

In order to achieve the full width layout all you need to do is remove the class `ua-standard`, which is currently attached to the `<body>` element, as seen on the [base structure page](base-structure.html).

### Campaign layout

The campaign layout is similar to the above mentioned standard full width layouts except it **must not** contain the site menu or the menu icon which sits within the page title component. Remember to remove the class `ua-standard` from the `<body>` element, in the same way as the full width layout, as described above.

```html
<div class="o-layout__container">
  <article class="o-layout__main-content" id="ua-main-content" role="main">
    <!-- Content grid -->
  </article>
</div>
```
 