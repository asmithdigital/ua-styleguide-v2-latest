---
title: Services menu
description: Documentation for the services menu.
tags:
  - navigation
static-demo: static-typography
---

## Services menu

The services menu contains menu items and fon icons. A demonstration of the icons that are approved to be used on the services menu can be seen on the [services menu demonstration page](static-typography.html).

The icons that are approved to be used on the services menu include:
- <i class="fa fa-fw fa-envelope" aria-hidden="true"></i> `fa-envelope`
- <i class="fa fa-fw fa-graduation-cap" aria-hidden="true"></i> `fa-graduation-cap`
- <i class="fa fa-fw fa-university" aria-hidden="true"></i> `fa-university`
- <i class="fa fa-fw fa-play" aria-hidden="true"></i> `fa-play`
- <i class="fa fa-fw fa-lock" aria-hidden="true"></i> `fa-lock`
- <i class="fa fa-fw fa-arrow-circle-up" aria-hidden="true"></i> `fa-arrow-circle-up`
- <i class="fa fa-fw fa-shopping-cart" aria-hidden="true"></i> `fa-shopping-cart`
- <i class="fa fa-fw fa-credit-card-alt" aria-hidden="true"></i> `fa-credit-card-alt`
- <i class="fa fa-fw fa-key" aria-hidden="true"></i> `fa-key`
- <i class="fa fa-fw fa-building" aria-hidden="true"></i> `fa-building`
- <i class="fa fa-fw fa-globe" aria-hidden="true"></i> `fa-globe`
- <i class="fa fa-fw fa-users" aria-hidden="true"></i> `fa-users`
- <i class="fa fa-fw fa-exchange" aria-hidden="true"></i> `fa-exchange`

When using font icons you must use the exact markup as described on the [icon font page](icon-font.html).

When adding the login menu item, you must place it at the top of the list of menu items and it must also have the class `c-services-menu__login`, and the icon class `fa-sign-in` must be used, as seen in the example below.

```html
<nav class="c-services-menu__container js-services-menu" id="ua-services-menu" data-off-canvas>
  <ul class="c-services-menu">
    <h3 class="c-services-menu__heading">Services menu</h3>
    <li class="c-services-menu__item"><a href="#0" class="c-services-menu__login"><i class="fa fa-fw fa-sign-in" aria-hidden="true"></i> Login</a></li>
    <li class="c-services-menu__item"><a href="#0"><i class="fa fa-fw [icon-class-name]" aria-hidden="true"></i> Student Mail</a></li>
    <!-- ... -->
  </ul>
  <button class="c-services-menu__close-button" data-close aria-label="Close menu" type="button">
    Services menu
    <span aria-hidden="true">&times;</span>
  </button>
</nav>
```

## JavaScript

- `js/plugins/services-menu.js`
