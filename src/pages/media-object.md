---
title: Media Object
description: Documentation for media object.
static-demo: static-media-object
---

## Image sizes

The following image size documentation is based on the retina (x2) support, the image ratios and the use of the responsive image technique, as describes on the [images page](images.html#responsive-images).

If you do not wish to use the responsive image technique then please ensure that the largest image size seen in the tables below is used, in order to ensure that the image will not be blurry at any screen resolution.

The following table describes the retina (x2) image dimension required for each variation of media object styles in relation to the media query breakpoints. The sizes that are seen in bold are the images sizes that **must** be used if you are not supporting the responsive image technique.

### Landscape

Style | small | medium | large
------|-------|--------|------
two column | **1166x875** | 964x723 | 862x647
three column | **1166x875** | 964x723 | 554x416
four column | **1166x875** | 964x723 | 402x302
horizontal thumb | **220x165** | same as small | same as small
horizontal small | **1166x875** | 500x375 | 500x375
horizontal large | **1166x875** | 500x375 | 1000x750

*The reason why all of the landscape image media objects sizes are `1166x875` on small screen resolution is because thay all become single column stacked media objects on small screen resolution and this image size is the largest size that the image will be at the widest point of the small resolution breakpoint. Also, these images are retina (x2) image size.*

### Portrait

Style | small | medium | large
------|-------|--------|------
horizontal thumb | **220x330** | same as small | same as small
horizontal small | 220x330 | **500x750** | same as medium
horizontal large | 220x330 | 500x750 | **920x1380**

*The reason why the image sizes for landscape images are much smaller on small screen resolution than the landscape image sizes is because each of the landscape images are fixed width on small screen resolution. They are in a single column but the image does not expand to full width. This is becuase a portrait image is too large in height on a small screen resolution.*

**Important**

When using a portrait image you must add the class `is-portrait` to the media object row element as seen in the following example

```html
<div class="c-media-object__row is-full-width is-portrait">
```

## Horizontal

Horizontal media objects must contain the class `is-full-width` otherwise they will only expand to 50% width. 

Horizontal media objects may have a wider landscape image by applying the class `is-large`. The above mentioned thumbnail sized portrait image may be used by applying the class `is-thumb`. Either the large or thumb classes may be applied into the position as seen in the example below where you see the class `is-large`.  

The large and thumb modifier classes are optional and without them the horizontal media objects will be displayed as default/small image size.

<div class="alert callout">
<p> **Please note**: When using either portrait or landscape thumb image size, you must remove the `c-media-object__tag` element.</p>
</div>

```html
<div class="c-media-object__row is-full-width is-large">
  <section class="c-media-object__column">
    <div class="c-media-object">
      <div class="c-media-object__section">
        <div class="c-media-object__image-wrapper">
          <a href="#0" class="c-media-object__image-link">
            <div class="c-media-object__tag"><p>Tag element</p></div>
            <img src="">
          </a>
        </div>
      </div>
      <div class="c-media-object__section c-media-object__section--content">
        <h2 class="c-media-object__heading"><a href="#0">Dreams feel real while we're in them</a></h2>
        <p>I'm going to improvise. Listen, there's something you should know about me... about inception. An idea is like a virus.</p>
        <a href="#0" class="c-btn c-btn--hollow">Button</a>
      </div>
      <!-- ... -->
    </div>
  </section>
  <!-- ... -->
</div>
```

## Stacked

As mentioned above, the default media object columns are 50% width (two columns). If however you wish for the stacked media object to fill its container to 100%, then you can apply the class `is-full-width` as per the horizontal example above.

You may also apply three or four column layouts to stacked media objects by adding either `has-three-columns` or `has-four-columns` as seen in the example code below.

```html
<div class="c-media-object__row is-stacked has-three-columns">
  <section class="c-media-object__column">
    <div class="c-media-object">
      <div class="c-media-object__section">
        <div class="c-media-object__image-wrapper">
          <a href="#0" class="c-media-object__image-link">
            <div class="c-media-object__tag"><p>Tag element</p></div>
            <img src="">
          </a>
        </div>
      </div>
      <div class="c-media-object__section c-media-object__section--content">
        <h2 class="c-media-object__heading"><a href="#0">Dreams feel real while we're in them</a></h2>
        <p>I'm going to improvise. Listen, there's something you should know about me... about inception. An idea is like a virus.</p>
        <a href="#0" class="c-btn c-btn--hollow">Button</a>
      </div>
      <!-- ... -->
    </div>
  </section>
  <!-- ... -->
</div>
```

## Image only

The image only media object is the same as the stacked media object except you do not have the content section `c-media-object__section--content`.

The other difference between the image only media object and the stacked and horizontal media object is you replace the  `c-media-object__tag` element with the `c-media-object__title` element.

```html
<div class="c-media-object__row is-stacked">
  <section class="c-media-object__column">
    <div class="c-media-object">
      <div class="c-media-object__section">
        <div class="c-media-object__image-wrapper">
          <a href="#0" class="c-media-object__image-link">
            <div class="c-media-object__title"><p>Title element</p></div>
            <img src="">
          </a>
        </div>
      </div>
      <!-- ... -->
    </div>
  </section>
  <!-- ... -->
</div>
```

## Equalize height

In order to equalize the height of the stacked media object you can use the equalizer JavaScript plugin.

The `js-equalize` class must be applied to the parent element and the `data-equalize-watch` attribute must be added to a `div` element which has no class name, and which sits directly inside the `c-media-object__column` element.

```html
<div class="c-media-object__row js-equalize">
  <section class="c-media-object__column">
    <div class="c-media-object is-stacked" data-equalizer-watch>
      <div class="c-media-object__section"></div>
      <div class="c-media-object__section c-media-object__section--content"></div>
      <!-- ... -->
    </div>
  </section>
  <!-- ... -->
</div>
```

## JavaScript

- `js/plugins/equalizer.js`
