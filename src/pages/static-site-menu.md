---
title: Static site menu
description: Static demonstration of site menu.
layout: static
static: true
---

This site is a static representation of site menu. The three demos below are documented on the [site menu page](site-menu.html) and show each alternative sub menu toggle functionality. 

<style>
.site-menu-demo {
  position: relative;
  float: left;
  width: 100%;
}
@media print, screen and (max-width: 39em){
  .site-menu-demo:nth-child(3n+3) {
    clear: both;
  }
}
@media print, screen and (min-width: 40em){
  .site-menu-demo {
    width: 50%;
  }
}
@media print, screen and (min-width: 64em){
  .site-menu-demo {
    width: 33.333%;
  }
}

</style>

<div class="site-menu-demo">
  <ul class="c-site-menu js-site-menu">
    <li class="c-site-menu__item"><a href="#0">Menu item</a></li>
    <li class="c-site-menu__item is-current">
      <a href="#0">Menu item</a>
      <ul class="c-site-menu__submenu is-active">
        <li><a href="#0">Menu item</a></li>
        <li>
          <a href="#0">Menu item</a>
          <ul class="c-site-menu__submenu is-active"> <!-- active sub menu parent <ul> -->
            <li class="is-active">
              <a href="#0">Menu item</a>
            </li> 
          </ul>
        </li>
        <li><a href="#0">Menu item</a></li>
      </ul>
    </li>
    <li class="c-site-menu__item"><a href="#0">Menu item</a></li>
  </ul>
  <button class="c-site-menu__close-button" data-close aria-label="Close menu" type="button">
    Site menu
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="site-menu-demo">
  <ul class="c-site-menu js-site-menu-toggle-both">
    <li class="c-site-menu__item"><a href="#0">Menu item</a></li>
    <li class="c-site-menu__item is-current">
      <a href="#0">Menu item</a>
      <ul class="c-site-menu__submenu is-active">
        <li><a href="#0">Menu item</a></li>
        <li>
          <a href="#0">Menu item</a>
          <ul class="c-site-menu__submenu is-active"> <!-- active sub menu parent <ul> -->
            <li class="is-active">
              <a href="#0">Menu item</a>
            </li> 
          </ul>
        </li>
        <li><a href="#0">Menu item</a></li>
      </ul>
    </li>
    <li class="c-site-menu__item"><a href="#0">Menu item</a></li>
  </ul>
  <button class="c-site-menu__close-button" data-close aria-label="Close menu" type="button">
    Site menu
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="site-menu-demo">
  <ul class="c-site-menu js-site-menu-toggle-item-only">
    <li class="c-site-menu__item"><a href="#0">Menu item</a></li>
    <li class="c-site-menu__item is-current">
      <a href="#0">Menu item</a>
      <ul class="c-site-menu__submenu is-active">
        <li><a href="#0">Menu item</a></li>
        <li>
          <a href="#0">Menu item</a>
          <ul class="c-site-menu__submenu is-active">
            <li class="is-active">
              <a href="#0">Menu item</a>
            </li> 
          </ul>
        </li>
        <li><a href="#0">Menu item</a></li>
      </ul>
    </li>
    <li class="c-site-menu__item"><a href="#0">Menu item</a></li>
  </ul>
  <button class="c-site-menu__close-button" data-close aria-label="Close menu" type="button">
    Site menu
    <span aria-hidden="true">&times;</span>
  </button>
</div>