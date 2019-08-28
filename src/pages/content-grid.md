---
title: Content Grid
description: Documentation for the content grid.
static-demo: static-content-grid
---

The content grid can be nested within the `o-layout__main-content` element, where you see the HTML comment `<!-- Content grid -->`, as seen on the [content layout page](content-layouts.html).

Columns within the content grid can take up either full width using the `-column-full` class or 50% using the `-column-half` class, as seen in the demo below.

```html
<div class="o-layout__content-row">
  <div class="o-layout__content-column-half">
    <!-- Nested component goes here -->
  </div>
  <div class="o-layout__content-column-full">
    <!-- Nested component goes here -->
  </div>
</div>
```
### Campaign layouts with content grid

The following information must only be used on campaign layout pages, not the above mentioned standard content grid. Demonstration of campaign layout modifier classes can be seen on the [campaign layout demo page](static-campaign-layout.html).

**Things to note:** 
- all columns must include the class `is-campaign` in order to add the campaign style padding and margin etc
- `is-inverse` must only be used on columns which include text only and when a dark background color is used 
- `is-centered` must only be used on columns which include text only
- if you wish to show two or more columns one after the other which each have the same background color, the second and subsequent columns must have the class `no-space-above` in order to remove a double spacing between the columns
- `is-pulled-up` must only be used when the first component inside the column is a media object/s

## Equalize height

The content grid uses flexbox equal heights modern CSS. If you want to display multiple columns side by side and you want them to have equal heights, you can add the class `o-layout--full-height` to the above mentioned column elements.

```html
<div class="o-layout__content-column-half o-layout--full-height">
```

However, flexbox is not fully supported on older browser and if you need to support equalised heights on old browsers then please apply the following strategy using the equalizer.js plugin:

The `js-equalize` class must be applied to the parent element, with the class of `o-layout__content-row`. The `data-equalize-watch` attribute must be added to the parent element of the nested component, not the content column element. This is because background colors are applied to elements that can be nested within the content grid column, not the column itself, and it will not expand the background color to "equalize" heights.

```html
<div class="o-layout__content-row js-equalize">
  <section class="o-layout__content-column-half">
    <div class="c-featured-content" data-equalizer-watch></div> // Example nested component
  </section>
  <!-- ... -->
</div>
```

## JavaScript

- `js/plugins/equalizer.js`
