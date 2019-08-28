---
title: Mega menu
description: Documentation for mega menu.
static-demo: static
---

## Default

As mentioned on the [base grid page](grid.html), the mega menu sits in the position as referenced by the comment `<!-- Mega menu -->`. The mega menu is dynamically loaded from the global servers using the mega menu loader plugin as mentioned on the [global assets page](global-assets.html).

To avoid a flash of unstyled content when the page loads, we need to place a simple placeholder version of the mega menu in place where the mega menu loader plugin will dynamically load and then replace this placeholder with the full and latest version of the mega menu from the global server. 

The wrapper element with the id `ua-mega-menu` is required in order for the mega menu loader plugin to work.

```html
<div id="ua-mega-menu">
  <nav>
    <ul class="c-mega-menu">
      <li class="c-mega-menu__item is-dropdown-submenu-parent"><a href="#0">Study at Adelaide</a></li>
      <li class="c-mega-menu__item is-dropdown-submenu-parent"><a href="#0">Research &amp; Innovation</a></li>
      <li class="c-mega-menu__item is-dropdown-submenu-parent"><a href="#0">Engage</a></li>
      <li class="c-mega-menu__item is-dropdown-submenu-parent"><a href="#0">About the Uni</a></li>
    </ul>
  </nav>
</div>
```
