---
title: Page heading
description: Documentation for the page heading.
---

## Hidden main heading

If the page does not include an `<h1>` element within the main content zone (determined by the `id="ua-main-content"`) then the hidden `<h1>` element must be used.

The contents of the hidden `<h1>` element must be a direct clone of the text within the page title.

The reason for the use of the hidden `<h1>` element is to ensure that screen readers have the main heading read to them. The page title component does not reside within the main content zone and cannot be used as the main heading for the page.

```html
<article id="ua-main-content" role="main">
  <div class="u-hidden-h1"><h1>I am a hidden H1</h1></div>
</article>
```
