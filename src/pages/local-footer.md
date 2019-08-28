---
title: Local footer
description: Documentation for the local footer.
static-demo: static
---

## Layout

The local footer is made up of four columns **ONLY**. The first column **must** contain the lead text paragraph element `u-lead-text`. 

The second and third columns must contain the title heading element, followed by one of the local footer components listed below.

The fourth column may contain just an image or it may also contain a title and local footer component just like the 2nd and 3rd columns.

Each column also contains a modifier class such as `is-first-column`, `is-second-column`, `is-third-column` or `is-fourth-column`. These classes are used in order to fix the position of each column.

```html
<div class="c-local-footer">
  <div class="c-local-footer__container">
    <section class="c-local-footer__column is-first-column">
      <p class="u-lead-text">Division of the Deputy Vice-Chancellor & Vice-President Academic</p>
      <a href="#0" class="c-btn c-btn--large">Large</a>
    </section>
    <section class="c-local-footer__column is-second-column">
      <h4 class="c-local-footer__title">Address</h4>
      <!-- Local footer component -->
    </section>
    <section class="c-local-footer__column is-third-column">
      <h4 class="c-local-footer__title">Contact</h4>
      <!-- Local footer component -->
    </section>
    <section class="c-local-footer__column is-fourth-column">
      <figure class="c-image">
        <a href="#0" class="c-image__link"><img src="" alt="" class="c-image--small"></a>
      </figure>
    </section>
  </div>
</div>
```

## Local footer components

As mentioned above, the local footer components may be placed within the 2nd, 3rd or 4th columns. If a local footer component is used then there must be a title element except for the image.

### Image

As mentioned above, the local footer image is only allowed to be in the far right fourth column. 

The retina (x2) landscape ratio image size for the local footer is `1166px` width and `875px` height.

For information regarding image ratios, please refer to the [images page](images.html). 

### Contact information

The contact information can be any native paragraph and anchor element.

```html
<p>Level 7, Wills Building<br>
  North Terrace Campus</p>
<p>The <a href="#0">University of Adelaide</a><br>
  South Australia 5005<br>
  Australia</p>
```

### Menu

The local footer menu can contain any contact information like the example below such as phone number and email links.

```html
<nav>
  <ul class="c-local-footer__menu">
    <li><a href="tel:" title="">T +61 8313 5901</a></li>
    <li><a href="tel:" title="">T +61 8313 8333</a></li>
    <li><a href="mailto:" title="">dvca@adelaide.edu.au</a></li>
  </ul>
</nav>
```

## Social icons

Local footer may also include the social icons component. This component can be see on the [social media documentation page](social-media.html).
