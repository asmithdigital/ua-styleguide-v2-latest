---
title: Video
description: Documentation for videos.
static-demo: static-video
---

## Video component

The video component is a stand alone component that may be placed within any other component or grid system.

## Responsive video

<div class="primary callout">
<p>The native HTML `<video>` element is responsive natively by adding:</p>
<p>`style="width:100%;max-width:100%;"`</p>
</div>

To make an `<iframe>` video component responsive, such as Youtube or Vimeo, you may apply the class `js-responsive-video-embed`, as seen in the demo code below. This requires the JavaScript plugin, seen in the [JavaScript section below](#javascript). Currently supported players for responsive video are Youtube and Vimeo.

```html
<div class="c-video">
  <div class="js-responsive-video-embed">
    <iframe width="560" height="320" src="//www.youtube.com/embed/TadTb5iuSDg" frameborder="0" title="YouTube Video" allowfullscreen></iframe>
  </div>
</div>
```

### CSS only responsive video

The above mentioned JavaScript plugin will allow any aspect ratio to be made responsive. If you wish to use a CSS only option, you may replace the class `js-responsive-video-embed` with one of the following CSS classes listed below. 

These classes do not require any JavaScript plugin, but they do force a specific aspect ratio:

CSS class | Apsect ratio
------|-------
`.c-video__responsive-embed` | Square 
`.c-video__responsive-embed--16-9` | 16:9 
`.c-video__responsive-embed--4-3` | 4:3 

## Video grid

<div class="alert callout">
<p>**Warning:** This video grid is deprecated and will be removed in a future release. It is recommended that you use the [content grid](content-grid.html) to display your video content.</p>
</div>

By default the `c-video` component will be styled as a two column video grid. By adding the class `has-three-columns` as seen in the example below, the video grid will become three column. 

```html
<div class="c-video__row has-three-columns">
  <section class="c-video__column">
    <!-- Responsive video component -->
  </section>
  <!-- ... -->
</div>
```

## Full width video

When using a stand alone single video you **must** include the following markup which includes the class `is-full-width` applied to the `c-video` wrapper element.

```html
<div class="c-video is-full-width">
  <section class="c-video__column">
    <!-- Responsive video component -->
  </section>
</div>
```

## JavaScript

- `js/plugins/responsive-video.js`
