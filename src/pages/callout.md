---
title: Callout
description: Documentation for callout.
static-demo: static-degree-finder
---

## Default

A callout is a simple box with content. You can include a heading element followed by a series of paragraphs and even a button.

```html
<div class="c-callout">
  <h5>Heading</h5>
  <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
  <a href="#0" class="c-btn">Default</a>
</div>
```

## Grid

The grid used within the callout provides a left and right column for the content. This grid must sit below the heading element.

```html
<div class="c-callout">
  <h5>Heading</h5>
  <div class="c-callout__grid">
    <div class="c-callout__grid-left">
      <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
    </div>
    <div class="c-callout__grid-right">
      <a href="#0" class="c-btn c-btn--block">Default</a>
    </div>
  </div>
</div>
```

## Closable

Closable callout must include the `data-closable` attribute on the container, along with the close button markup, as seen in the example below.

The class `js-callout` is required in order to set a cookie. This cookie will be set when the close button has been clicked.

```html
<div class="c-callout js-callout" data-closable>
  <h5>Heading</h5>
  <div class="c-callout__grid">
    <div class="c-callout__grid-left">
      <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
    </div>
    <div class="c-callout__grid-right">
      <a href="#0" class="c-btn c-btn--block">Default</a>
    </div>
  </div>
  <button class="c-callout__close-button" aria-label="Dismiss callout" type="button" data-close>
    <span aria-hidden="true">&times;</span>
  </button>
</div>
```

## Set a cookie

You may set a cookie when the close button is clicked. Below is an example of how you may do this.

```html
<script>
  function handleClose() {
    cookie( "cookie-name-here", "true", 2017);
  }
  $('.js-callout').on('close.zf.trigger', handleClose);
</script>
```

## JavaScript

- `js/plugins/cookie.js`
- `js/plugins/callout.js`
