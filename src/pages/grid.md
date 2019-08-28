---
title: The Grid
description: Documentation for the base grid.
---

<div class="primary callout">
<p>Before you begin implementing the base grid, please ensure you have read and implemented the HTML required for the [base page HTML structure](base-structure.html).</p>
</div>

## Base grid

The base grid contains the HTML markup for the header, footer and main content sections of the web page. As seen in the example below where you see the comment `<!-- Main content layouts go here -->`, the main content layouts must be positioned. Information about this can be found on the [content layouts page](content-layouts.html).

The quick links menu and mega menu markup can be viewed on their documentation pages found under the navigation section in the left menu of this style guide. The slider, page title, local footer and footer meta components are found within the containers section in the left menu of this style guide.

The quick links, mega menu and global footer are dynamically loaded from our server using the mega menu loader plugin. For information about how to implement this functionality please visit the [global assets page](global-assets.html).


```html
<header class="o-layout__header" id="ua-top" role="banner">
  <div class="c-header__title-bar">
    <div class="c-header__title-bar-left">
      <a href="/" class="c-header__logo--mobile">
        <img src="assets/img/ua-logo.png">
      </a>
    </div>
    <div class="c-header__title-bar-right">
      <a href="#0" class="c-header__title-bar-icon" data-toggle="ua-search"><i class="fa fa-search"></i></a>
      <a href="#0" class="c-header__title-bar-icon" data-toggle="ua-header-menu"><i class="fa fa-chevron-down"></i></a>
    </div>
  </div>
  <div class="c-header" id="ua-header-menu">
    <div class="c-header__topbar-first">
      <div class="c-header__container">
        <a href="/" class="c-header__logo">
          <img src="assets/img/ua-logo.png">
        </a>
        <div class="c-header__menu-column">
          <!-- Quick links menu -->
        </div>
      </div>
    </div>
    <div class="c-header__topbar-second">
      <div class="c-header__container">
        <div class="c-header__menu-column">
          <!-- Mega menu -->
        </div>
      </div>
    </div>
    <button class="c-header__close-button" data-close aria-label="Close reveal" type="button">
      Menu
      <span aria-hidden="true">&times;</span>
    </button>
  </div> <!-- #ua-header-menu -->
</header>
<main class="o-layout__main">
  <div class="o-layout__slider-container">
    <div class="o-layout__slider">
      <!-- Slider -->
    </div>
    <div class="o-layout__page-title">
      <!-- Page title -->
    </div>
  </div>

  <!-- Main content layouts go here -->

</main>
<div class="o-layout__local-footer">
  <div class="o-layout__container">
    <!-- Local footer -->
  </div>
</div>
<footer class="o-layout__footer">
  <div id="ua-footer"></div> <!-- The global footer placeholder -->
  <!-- Footer meta -->
</footer>
```
