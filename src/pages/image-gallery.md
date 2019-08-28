---
title: Image gallery
description: Documentation for the image gallery component.
static-demo: static-image-gallery
---

## Default

To implement the image gallery component simply copy the HTML markup seen below. To add more images to the gallery simply repeat the `c-image-gallery__list-item` element.

Please ensure that each item contains the class `js-image-gallery-item` as well as the attribute `rel="my-gallery` on every list item as seen below. The name used within the rel-* attribute needs to be the exact same name on each item in order for the image gallery to function correctly. 

```html_example
<div class="c-image-gallery">
  <h3 class="c-image-gallery__title">Sample photo gallery</h3>
  <p>Bacon ipsum dolor sit amet salami ham hock biltong ball tip drumstick sirloin pancetta meatball short loin.</p>
  <ul class="c-image-gallery__list has-four-columns">
    <li class="c-image-gallery__list-item">
      <a class="c-image-gallery__list-link js-image-gallery-item" rel="my-gallery" href="https://via.placeholder.com/1106x830/" title="Image 1">
        <img class="c-image-gallery__image-thumb" alt="Galley Item 1" src="https://via.placeholder.com/564x423/">
      </a>
    </li>
    <li class="c-image-gallery__list-item">
      <a class="c-image-gallery__list-link js-image-gallery-item" rel="my-gallery" href="https://via.placeholder.com/1106x830/" title="Image 2">
        <img class="c-image-gallery__image-thumb" alt="Galley Item 2" src="https://via.placeholder.com/564x423/">
      </a>
    </li>
    <!-- ... -->
  </ul>
</div>
```

## Image sizes

Images may be at the landscape ratio `4:3`, or the portrait ratio `2:3`. The following table describes the image sizes for both ratios.

landscape | portrait
------------------|----------------
 564x423  | 564x846

 ### Image gallery grid

Landscape gallery grid must be 4 columns and portrait gallery grid must be 6 columns. 

#### 4 column grid
The 4 column can be create dby adding the class `has-four-columns` to the image gallery markup, as seen in the emo code below.

```html
<div class="c-image-gallery has-four-columns">
```

#### 6 column grid

The 6 column can be create dby adding the class `has-six-columns` to the image gallery markup, as seen in the emo code below.

```html
<div class="c-image-gallery has-six-columns">
```



## JavaScript

- `js/vendor/jquery.swipebox.min.js`
- `js/plugins/image-gallery.js`
