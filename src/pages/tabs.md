---
title: Tabs
description: Description of tabs component.
static-demo: static-tabs
---

## Default

Please remember to use unique `id` attributes when implementing tabs. The tab menu item must reference the ID of the relevant tab panel with the anchor element.

To set the tab item and panel to the active state when the page loads please ensure the relevant tab item contains the class `is-active-item` and the relevant panel contains the class `is-active-panel`. Please also ensure that the active tab item contains the attribute `aria-selected="true"`. Each of the active classes and aria-* label will be toggled with the JavaScript plugin. 

```html
<div class="c-tabs__container">
  <ul class="c-tabs js-tabs" data-tabs id="collapsing-tabs">
    <li class="c-tabs__title tabs-title is-active-item"><a href="#panel1c" aria-selected="true">Tab 1</a></li>
    <li class="c-tabs__title tabs-title"><a href="#panel2c">Tab 2</a></li>
    <!-- ... -->
  </ul>
  
  <div class="c-tabs__content" data-tabs-content="collapsing-tabs">
    <div class="c-tabs__panel is-active-panel" id="panel1c">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class="c-tabs__panel" id="panel2c">
      <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
    </div>
   <!-- ... -->
  </div>
</div>
```

## JavaScript

- `js/dist/plugins/tabs.js`
