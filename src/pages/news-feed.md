---
title: News feed
description: Documentation for news feed.
static-demo: static-news-feed
---

<div class="primary callout">
<p>The following layouts and nested components are for use on the news feed only. For information about events feed, please review the [events feed documentation](events-feed.html).</p>
</div>

## Feed items

Feed items are a feed or loop of post items. Each feed item contains a short intro paragraph and links through to the full single post item page. Each feed item content section is wrapped in a list item `<section>` element which is then repeated for the required news feed items. 

There is a meta component that sits below the `<h2>` element and this `<h2>` element must link through to the particular single post news item page. Each feed item also contains a link at the end of the content to the single post news item with the link text `Full Story`. Finally, each feed item contains an RSS feed icon component which lives directly below the content.

```html
<div class="c-post">
  <section class="c-post__list-item">
    <div class="c-post__content">
      <h2 class="c-post__heading"><a href="#0">Lorem ipsum dolor</a></h2>
      <!-- Post image -->
      <!-- Post meta -->
      <p>Lorem ipsum dolor sit amet, at eum docendi euripidis sadipscing, dignissim conceptam percipitur nam an, mel te natum illum veritus. Et usu euismod nominati, cu meis habemus laboramus has, est veritus signiferumque ea. Ne ius stet nostro aeterno, facilis albucius definitionem ut mea.</p>
      <p><a href="#0"><em>Full story</em></a></p>
    </div>
    <!-- RSS Feed icon -->
  </section>
  <!-- ... -->
</div>
```

## Single post

The single post item is the full news post item and is its own page. It contains the `<h1>` element within the content section and it does not require the list item `<section>` element because it is not a feed or loop of post items but instead a single page.
 
The single post item contains post meta below the heading element in the same way that each feed item does. The single post contains a post utility component that lives below the content in the same place where the feed icon lives in the above post feed item.

```html
<div class="c-post">
  <div class="c-post__content">
    <h1>Lorem ipsum dolor</h1>
    <!-- Post meta -->
    <!-- Post image -->
    <p>Lorem ipsum dolor sit amet, at eum docendi euripidis sadipscing, dignissim conceptam percipitur nam an, mel te natum illum veritus.</p>
  </div>
  <!-- Post utility -->
</div>
```

## News feed nested components

<div class="primary callout">
<p>The following components are to be nested within the above mentioned Feed items and Single posts layouts for news feeds only. For information about which nested components are allowed to be used for events, please review the [events feed documentation](events-feed.html).</p>
</div>

### Post meta

Used on both the feed item and the single post and lives directly below the heading element.

```html
<div class="c-post__meta">
  <i class="fa fa-clock-o" aria-hidden="true"></i> Posted on <span class="c-post__meta-date"><a href="#0">December 9 2016</a></span> by <span class="c-post__meta-author"><a href="#0">Author Name</a></span>
</div>
```

### Post image

As seen in the [feed items section](#feed-items) above, a feed item image may placed directly above the post meta component, where you see the HTML comment `<!-- Post image -->` in the above code demo. This image may only be a **small image** which must be floated right.

As seen in the [single post section](#single-post) above, a post image may be placed directly below the post meta component, where you see the HTML comment  `<!-- Post image -->` in the above code demo. This image may be either a **full width image** or a **large image** which must be floated right.

For more information about these image size classes, image ratios and image size dimensions for the full width, large or small floated right news feed item or single post image, please visit the [images page](images.html).

### RSS feed icon

To be used on each news feed item only and lives directly below the content.

```html
<div class="c-post__feed-icon">
  <a href="/rss/"><img src="//www.adelaide.edu.au/global/images/rss.gif" alt="RSS News Feed" width="44" height="16" border="0" title="RSS News Feed"></a>
</div>
```

### Post utility

To be used on each single news item page only and lives directly below the content.

```html
<div class="c-post__utility">
  <span class="c-post__utility-categories">Posted in </span> <a href="#0">Category</a>, <a href="#0">Category</a> |
  <span class="c-post__utility-tags">Tagged in <a href="#0">tag</a>, <a href="#0">tag</a>, <a href="#0">tag</a></span>
  <span class="c-post__utility-comments"><i class="fa fa-comment" aria-hidden="true"></i> Comments off<span class="c-post--hidden"> on Post Title goes here</span></span>
  <span class="c-post__utility-comments"><i class="fa fa-comment" aria-hidden="true"></i> <a href="#0">Leave a comment<span class="c-post--hidden"> on Post Title goes here</span></a></span>
</div>
```

## Media object layout

When using the media object component as a news/events landing page layout, you can review the [media object documentation page](media-object.html).

If you wish to add event dates to the media object component, you may place the following calender icon and event date markup directly below the media object heading.

```html
<!-- Media object wrapper markup -->
  <!-- Media object heading markup (.c-media-object__heading) -->
  <p><i class="fa fa-calendar" aria-hidden="true"></i> <strong>August 14, 5.30pm</strong></p>
<!-- Media object wrapper markup -->
```
