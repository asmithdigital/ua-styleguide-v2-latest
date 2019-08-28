---
title: Image gallery
description: Static demonstration of image gallery.
layout: static
static: true
test-javascript: image-gallery
---

<div class="c-image-gallery">
  <h3 class="c-image-gallery__title">Sample photo gallery</h3>
  
  <p>Bacon ipsum dolor sit amet salami ham hock biltong ball tip drumstick sirloin pancetta meatball short loin. Venison tail chuck pork chop, andouille ball tip beef ribs flank boudin bacon. Salami andouille pork belly short ribs flank cow. Salami sirloin turkey kielbasa.</p>

  <ul class="c-image-gallery__list has-four-columns">
    {{#repeat 5}}
    <li class="c-image-gallery__list-item">
      <figure class="c-image">
        <a class="c-image-gallery__list-link js-image-gallery-item" rel="gallery-1" href="https://via.placeholder.com/1106x830/" title="Image with longer figcaption">
          <img class="c-image-gallery__image-thumb" alt="Galley Item" src="https://via.placeholder.com/564x423/">
        </a>
        <figcaption class="c-image__caption">Really long figcaption <a href="#0">with link text</a> to show the correct styles</figcaption>
      </figure>
    </li>
    <li class="c-image-gallery__list-item">
      <figure class="c-image">
        <a class="c-image-gallery__list-link js-image-gallery-item" rel="gallery-1" href="https://via.placeholder.com/1106x830/" title="Image gallery caption/title that is really long. Image gallery caption/title that is really long. Image gallery caption/title that is really long. Image gallery caption/title that is really long. Image gallery caption/title that is really long. Image gallery caption/title that is really long. Image gallery caption/title that is really long. Image gallery caption/title that is really long.">
          <img class="c-image-gallery__image-thumb" alt="Galley Item" src="https://via.placeholder.com/564x423/">
        </a>
        <figcaption class="c-image__caption">Really long figcaption <a href="#0">with link text</a> to show the correct styles</figcaption>
      </figure>
    </li>
    <li class="c-image-gallery__list-item">
      <figure class="c-image">
        <img class="c-image-gallery__image-thumb" alt="Galley Item" src="https://via.placeholder.com/564x423/">
        <figcaption class="c-image__caption">No pop-up image</figcaption>
      </figure>
    </li>
    {{/repeat}}
  </ul>
</div>
