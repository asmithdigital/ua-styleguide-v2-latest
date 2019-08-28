---
title: Interchange
description: Documentation for interchange.
static-demo: static-interchange
dark-mode: true
---

## Images

Interchange is a JavaScript plugin which allows different images to be loaded to the user at different screen resolutions. The plugin uses CSS media queries to determine the "breakpoints" at which each image is loaded, based on a comma-separated list `[image_path, media_query]`, which is applied using the `data-interchange` attribute.

Notice when using an image, you must also use the markup for the `<figure>` as seen on the [images page](images.html).

Each element which uses the interchange data attribute must also include the class `js-interchange`.

```html_example
<figure class="c-image is-full-width">
  <img class="c-image--full-width js-interchange" data-interchange="[assets/img/interchange/small.jpg, small], [assets/img/interchange/medium.jpg, medium], [assets/img/interchange/large.jpg, large]" alt="">
</figure>
```

## Background images

Interchange may also be applied to a non-`<img>` element. The elements background image will be set dynamically.

```html
<div class="js-interchange" data-interchange="[assets/img/interchange/small.jpg, small], [assets/img/interchange/medium.jpg, medium], [assets/img/interchange/large.jpg, large]"></div>
```

<div class="docs-example-interchange-background js-interchange" data-interchange="[assets/img/interchange/small.jpg, small], [assets/img/interchange/medium.jpg, medium], [assets/img/interchange/large.jpg, large]"></div>

## HTML

Interchange may also swap out entire chunks of HTML. This must be applied to a `<div>` element instead of an `<img>` element and each item in the list must reference an HTML file.

```html
<div class="js-interchange" data-interchange="[partials/interchange-default.html, small], [partials/interchange-medium.html, medium], [partials/interchange-large.html, large]"></div>
```
<div class="js-interchange" id="docs-example-interchange" data-interchange="[partials/interchange-default.html, small], [partials/interchange-medium.html, medium], [partials/interchange-large.html, large]"></div>

## Media Queries

Below is a complete list of each break points names which are available for use within the `data-interchange` attribute.

Query Name | Media Query
-----------|------------
small      | `screen and (min-width: $small-breakpoint)`
medium     | `only screen and (min-width: $medium-breakpoint)`
large      | `only screen and (min-width: $large-breakpoint)`
xlarge     | `only screen and (min-width: $xlarge-breakpoint)`
xxlarge    | `only screen and (min-width: $xxlarge-breakpoint)`
portrait   | `screen and (orientation: portrait)`
landscape  | `screen and (orientation: landscape)`
smallRetina| Same as `small` plus retina detection
mediumRetina | Same as `medium` plus retina detection
largeRetina| Same as `large` plus retina detection
xlargeRetina | Same as `xlarge` plus retina detection
xxlargeRetina | Same as `xxlarge` plus retina detection
retina     | Retina detection only
