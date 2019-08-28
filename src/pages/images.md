---
title: Images
description: Documentation for images.
static-demo: static-images
---

## Image sizes

Image sizes are determined by CSS classes. You must apply one of the following classes to the `<img>` element to determine the image width as seen in the HTML example below.
- `c-image--thumb`
- `c-image--small`
- `c-image--large`

You **must not** use images without an image size class applied.

```html
<figure class="c-image">
  <img src="" alt="" class="c-image--small">
</figure>
```

### Full width

You may also use the full width image by applying the full width class to both the `<figure> ` and `<img>` elements as seen below. 

```html
<figure class="c-image is-full-width">
  <img src="" alt="" class="c-image--full-width">
</figure>
```

### Image ratios

Images may be at the landscape ratio `4:3`, or the portrait ratio `2:3`

### Image dimensions

The following table describes the required retina supported (x2) image sizes for the image size classes listed above. 

It is recommended that you adopt a **responsive image technique** for optimal performance. The image dimensions described in the table below should only be loaded to retina supported devices and you should load images at half the resolution to non-retina supported devices using a **responsive image technique**.

image class | landscape  | portrait 
------------|------------------|----------------
`c-image--thumb` | 220x165  | 220x330
`c-image--small` | 460x345  | 460x690
`c-image--large` | 920x690  | 920x1380

The full width image must **only** be displayed as landscape ratio. The table below describes the required retina supported (x2) image sizes for both the two column and full width content layout variations.

image class | two columns | full width
------------|--------------------|------------------
`c-image--full-width` | 1784x1338  | 2272x1704

#### News feed single posts full width image

The news feed single post full width image must be landscape and a ratio of `3:1`. The table below describes the required retina supported (x2) image sizes for both the two column and full width content layout variations for the news feed single post full width image. 

image class | two columns  | full width
------------|--------------------|------------------
`c-image--full-width` | 1786x595  | 2272x757

### Responsive image technique

For responsive image technique you may refer to the [responsive image solution section](#responsive-images) below, or the [interchange solution page](interchange.html).

## Linked image

The image may be linked by wrapping the image with the following anchor element with the class of `c-image--link`.

```html
<figure class="c-image">
  <a href="#0" class="c-image__link"><img src="" alt="" class="c-image--small"></a>
</figure>
```

## Floating figure

You may float the `<figure>` element to the left or right by using one of the following classes.
- `c-image--right`
- `c-image--left`

```html
<figure class="c-image c-image--left">
  <img src="" alt="" class="c-image--small">
</figure>
```

## With caption

You may use the `<figure>` element with a caption simply by adding the `<figcaption>` element as well as the  `has-caption` class as seen in the example below.

This may be applied to any of the examples mentioned above. If you wish to remove the `<figcaption>` element then you **must** also remember to remove the `has-caption` class.
 
```html
<figure class="c-image has-caption">
  <img src="" alt="" class="c-image--small">
  <figcaption class="c-image__caption">Really long figcaption <a href="#0">with link text</a> to show the correct styles</figcaption>
</figure>
```

## Responsive images

The responsive image uses the native HTML5 `<picture>` element, which can be reviewed on the [MDN documentation page for the picture element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture). Since there is [limited browser support](https://caniuse.com/#feat=srcset) for this `<picture>` and `srcset` functionality at the moment, a JavaScript pollyfill plugin called [Picturefill.js](http://scottjehl.github.io/picturefill/) is used. In order to improve performance, Modernizr.js includes the required browser feature tests so that we can dynamically load this pollyfill to the individual users who require the pollyfill, rather than simply loading the pollyfill to every user.

```html
<picture class="c-image">
  <!--[if IE 9]><video style="display: none;"><![endif]-->
  <source media="(min-width: 980px)" srcset="path/to/large.jpg, path/to/large-retina.jpg 2x">
  <source media="(min-width: 768px)" srcset="path/to/medium.jpg, path/to/medium-retina.jpg 2x">
  <!--[if IE 9]></video><![endif]-->
  <img srcset="path/to/small.jpg, path/to/small-retina.jpg 2x" alt="a cute kitten" class="c-image--large">
</picture>
```

### JavaScript

The following dependencies, along with global JavaScript dependencies as described on the [JavaScript page](javascript.html), are required for the responsive `<picture>` component.
 
- `js/vendor/picturefill.min.js`
- `js/plugin/picture.js`
