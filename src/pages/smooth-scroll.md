---
title: Smooth scroll
description: Documentation for smooth scroll.
static-demo: static
---

## Smooth scroll

You can apply smooth scroll to a list of links by adding the class `js-smooth-scroll` to the parent container.

```html
<ul class="js-smooth-scroll">
  <li><a href="#first">First Arrival</a></li>
  <li><a href="#second">Second Arrival</a></li>
  <li><a href="#third">Third Arrival</a></li>
</ul>
<div class="some-section-wrapper">
  <section id="first">First Section</section>
  <section id="second">Second Section</section>
  <section id="third">Third Section</section>
</div>
```

You can also set smooth scroll directly on a link.

```html
<a href="#exclusive" class="js-smooth-scroll">Exclusive Section</a>
<section id="exclusive">The Exclusive Section</section>
```


## Back to top

The back to top component sits directly above the JavaScript references at the bottom of the page template, right before the closing `<body>` tag.

```html
<p class="c-back-top js-back-top">
  <a href="#ua-top" title="back to top" class="c-btn js-smooth-scroll"><i class="fa fa-angle-up"></i> top</a>
</p>
```

## JavaScript

- `js/plugins/smooth-scroll.js`
