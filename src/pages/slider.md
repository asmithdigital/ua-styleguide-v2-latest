---
title: Slider
description: Documentation for image and video slider.
static-demo: static
---

## Base slider

The base for the slider requires the markup seen below. It requires the class `js-vegas-slider` and also the array of objects which define the slides as seen in the data attribute `data-vegas-slides`.

### Optional Overlay
An optional data attribute `data-vegas-overlay` is a string path to an overlay gif or png ( needs to be transparent ) that will use be overlayed on top of the slides.

```html
<div class="c-vegas-slider__container">
  <div class="c-vegas-slider js-vegas-slider"
       data-vegas-slides='[
        {"src": "assets/img/unsplash4.jpg", "valign": "top"},
        {"src": "assets/img/unsplash4.jpg", "video": {"src": ["assets/video/video.mp4"], "loop": "false", "mute": "true"}},
        {"src": "assets/img/unsplash3.jpg"}
       ]'
       data-vegas-overlay="assets/img/overlay/01.png"
  </div>
</div>
```

## Custom settings

You may adjust the following settings. Each of these custom settings are optional.

| Name                           | Type   | Default | Description |
| ------------------------------ | ------ | ------- | ----------- |
| data-vegas-transition-duration | number | 4000    | Slides transition duration speed |


**Custom height**

Custom height inline style attribute must be applied to the `c-vegas-slider__container`.

This custom height will only affect the desktop resolution because tablet & mobile height is enforced within the global CSS.

Previous and Next button may also be included as seen below. The wrapper class `.js-vegas-slider__navigation` is required when using previous and next navigation.

```html
<div class="c-vegas-slider__container" style="height: 500px">
  <div class="c-vegas-slider js-vegas-slider"
       data-vegas-slides='[]'
       data-vegas-transition-duration="1000">
      <div class="js-vegas-slider__navigation">
        <a href="#" id="vegas-slider-previous"></a>
        <a href="#" id="vegas-slider-next"></a>
      </div>
  </div>
</div>
```

## JavScript

- `js/plugins/vegas.js`
