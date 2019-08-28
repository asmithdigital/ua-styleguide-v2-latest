---
title: pagination
description: Documentation for pagination.
static-demo: static-az-list
---

## Pagination

The pagination component can be used on any component which requires the user to navigation thought multiple pages of content such as the news feed page.

The example below shows the use of the disabled and active previous and next pagination items. When the previous or next items are disabled, they do not require the anchor element. The previous item is disabled when you are on the first page and have no more "previous" pages to navigate to and the next item it disabled when you are on the last page and there are no more "next" pages to navigate to.

When the user is on a particular pagination item the class `is-current` is added to the item and there is a `<span>` element with the class `c-pagination--hidden` which is used by screen readers and is required.

Finally, there is an ellipsis list item. This is used when there are a large number of pagination items and you want to display the first few items and the last few items and hide the middle few pagination items to save space, as seen in the example below. This ellipsis item does not require an anchor element.

```html
<ul class="c-pagination" role="navigation" aria-label="Pagination">
  <li class="c-pagination__previous is-disabled"><span class="c-pagination--hidden">Previous page</span></li>
  <li class="c-pagination__previous"><a href="#0" aria-label="Previous page"><span class="c-pagination--hidden">Previous page</span></a></li>
  <li class="is-current"><span class="c-pagination--hidden">You're on page</span> 1</li>
  <li><a href="#0" aria-label="Page 2">2</a></li>
  <li><a href="#0" aria-label="Page 3">3</a></li>
  <li><a href="#0" aria-label="Page 4">4</a></li>
  <li class="c-pagination__ellipsis" aria-hidden="true"></li>
  <li><a href="#0" aria-label="Page 12">12</a></li>
  <li><a href="#0" aria-label="Page 13">13</a></li>
  <li class="c-pagination__next"><a href="#0" aria-label="Next page"><span class="c-pagination--hidden">Next page</span></a></li>
  <li class="c-pagination__next is-disabled"><span class="c-pagination--hidden">Next page</span></li>
</ul>
```

## Pager

The pager component uses a previous and next button to navigate through multiple pages. The previous button floats to the left and the next button floats to the right. The demo code below shows both the active and the disabled state. The disabled state is created through the addition of the class `is-disabled`. 

When there are no more pages to navigate to, the disabled state may be use. Alternatively, you may also choose not to dispay either the previous or next button if there are no more pages to navigate to.

```html
<ul class="c-pager" role="navigation" aria-label="Pagination">
  <li class="c-pager__previous is-disabled">Previous<span class="c-pager--hidden"> page</span></li>
  <li class="c-pager__previous"><a href="#0" aria-label="Previous page">Previous<span class="c-pager--hidden"> page</span></a></li>
  <li class="c-pager__next"><a href="#0" aria-label="Next page">Next<span class="c-pager--hidden"> page</span></a></li>
  <li class="c-pager__next is-disabled">Next<span class="c-pager--hidden"> page</span></li>
</ul>
```