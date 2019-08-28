---
title: Featured content
description: Documentation for featured content.
static-demo: static-typography
---

## Default
 
The featured content container to to make content stand out on the page. It is intended for a heading and a paragraph element.

The featured content container must not contain any other component found in the style guide.

```html_example
<div class="c-featured-content">
  <h2>Heading 2 (any heading level can be used but is not required)</h2>
  <p>Depending on where the feature text sits within the page, please use whichever heading type is appropriate, in most cases you will use h3, h4, or h5 however all are supported.</p>
</div>
```

## Compact

The compact version of featured content is used when you wish to show less padding within the featured content component when optimising space. This can be achieved by adding the class `is-compact`. An example of this in use is seen on the [events feed items](events-feed.html#feed-items). 

```html_example
<div class="c-featured-content is-compact">
  <ul>
    <li>A compact list item</li>
    <li>A compact list item</li>
  </ul>
</div>
```
