---
title: Events feed
description: Documentation for events feed.
static-demo: static-events-feed
---

<div class="primary callout">
<p>The following layouts and nested components are for use on the events feed only. For information about news feed, please review the [news feed documentation](news-feed.html).</p>
</div>

## Feed items

For definition of feed items please review the documentation on the [news feed page](news-feed.html#feed-items)

Within the feed items layout there is a button group component that sits above the `<h2>` element and this `<h2>` element must link through to the particular single post events item page. Each feed item also contains a link at the end of the content to the single post events item with the link text `Full Story`. Finally, each feed item contains an event details component which lives directly below the `<h2>` element. This event details component must use the `is-compact` modifier, as described in the nested components section below.

```html
<div class="c-post">
  <section class="c-post__list-item">
    <div class="c-post__content">
      <!-- Button group -->
      <h2 class="c-post__heading"><a href="#0">Lorem ipsum dolor</a></h2>
      <!-- Events details -->
      <p>Lorem ipsum dolor sit amet, at eum docendi euripidis sadipscing, dignissim conceptam percipitur nam an, mel te natum illum veritus. Et usu euismod nominati, cu meis habemus laboramus has, est veritus signiferumque ea. Ne ius stet nostro aeterno, facilis albucius definitionem ut mea.</p>
      <p><a href="#0"><em>Full story</em></a></p>
    </div>
  </section>
  <!-- ... -->
</div>
```

## Single post

For definition of single post please review the documentation on the [news feed page](news-feed.html#single-post).

Within the single post layout there is an events details component which sits directly below the `<h2>` element. This events details component must use the default styles **without** the compact modifier class, as described in the nested components section below.

```html
<div class="c-post">
  <div class="c-post__content">
    <h1>Lorem ipsum dolor</h1>
    <h2>Lorem ipsum dolor</h2>
    <!-- Events details -->
    <p>Lorem ipsum dolor sit amet, at eum docendi euripidis sadipscing, dignissim conceptam percipitur nam an, mel te natum illum veritus.</p>
  </div>
</div>
```

## News feed nested components

<div class="primary callout">
<p>The following components are to be nested within the above mentioned Feed items and Single posts layouts for events feeds only. For information about which nested components are allowed to be used for news, please review the [news feed documentation](news-feed.html).</p>
</div>

### Button group

The button group component is documented on the [button group page](buttons.html#button-group). The following example shows that when using this component on events feed item or single post page, the first button must be the previous month, the second button is the current month and the third button is the next month. Whichever button is currently active is shown as diasabled by adding the class `is-disabled`.

```html
<div class="c-btn__group">
  <a href="#0" class="c-btn c-btn--success">August</a>
  <a href="#0" class="c-btn c-btn--success is-disabled">September</a>
  <a href="#0" class="c-btn c-btn--success">November</a>
</div>
```

### Events details

The events details component displays details about the event. It is used in its full details and default featured content styling on the single post page, as mentioned above, and is also used on the event feed items in its compact display. The compact modifier class must only be used on the event feed items layout.

In order to create the compact style of featured content, add the class `is-compact` to the `c-featured-content` component, as described on the [featured content page](featured-content.html#compact).

The example below shows the featured content component parent and an example of an icon next to the detail content. The "title" is wrapped in the `<strong>` element to apply bold font weight.

```html
<div class="c-featured-content">
  <ul class="c-post__event-detail">
    <li><i class="fa fa-fw fa-clock-o" aria-hidden="true"></i>  <strong>Date:</strong> Sat, 1 - Sun, 2 Sept 2018, 2:30 pm - 5:00 pm</li>
    <!-- ... -->
  </ul>
</div>
```
