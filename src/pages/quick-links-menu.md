---
title: Quick links menu
description: Documentation for quick links menu.
static-demo: static
---

## Default

As mentioned on the [base grid page](grid.html), the quick links menu sits in the position as referenced by the comment `<!-- Quick links menu -->`. The quick links menu is dynamically loaded from the global servers using the mega menu loader plugin as mentioned on the [global assets page](global-assets.html).

To avoid a flash of unstyled content when the page loads, we need to place a simple placeholder version of the quick links menu in place where the mega menu loader plugin will dynamically load and then replace this placeholder with the full and latest version of the quick links menu from the global server. 

The wrapper element with the id `ua-quicklinks` is required in order for the mega menu loader plugin to work.

```html
<div id="ua-header-quicklinks">
  <nav>
    <ul class="c-header-quicklinks">
      <li><a href="#0">Current Students</a></li>
      <li><a href="#0">Staff</a></li>
      <li><a href="#0">Alumni</a></li>
      <li><a href="#0">Quicklinks</a></li>
      <li class="c-header__search"><a href="#"><i class="fa fa-search"></i></a></li>
    </ul>
  </nav>
</div>
```
