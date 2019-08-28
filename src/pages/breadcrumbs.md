---
title: Breadcrumbs
description: Documentation for breadcrumbs.
static-demo: static
---

The breadcrumb must be placed into the position where you see the HTML comment `<!-- Breadcrumb -->` on the [content layouts page](content-layouts.html).

```html
<nav aria-label="You are here:" role="navigation">
  <ul class="c-breadcrumbs">
    <li><a href="#">Home</a></li>
    <li><a href="#">Features</a></li>
    <li class="is-disabled">Gene Splicing</li>
    <li>
      <span class="c-breadcrumbs--hidden">Current: </span> Cloning
    </li>
  </ul>
</nav>
```
