---
title: Tabs
description: Static demonstration of tabs.
layout: static
static: true
---

<div class="c-tabs__container">
  <ul class="c-tabs js-tabs" data-tabs id="collapsing-tabs">
    <li class="c-tabs__title is-active-item"><a href="#tab-panel1" aria-selected="true">Tab 1</a></li>
    <li class="c-tabs__title"><a href="#tab-panel2">Tab 2</a></li>
    <li class="c-tabs__title"><a href="#tab-panel3">Tab 3</a></li>
    <li class="c-tabs__title"><a href="#tab-panel4">Tab 4</a></li>
  </ul>
  <div class="c-tabs__content" data-tabs-content="collapsing-tabs">
    <div class="c-tabs__panel is-active-panel" id="tab-panel1">
      <ul class="c-accordion js-accordion-nested">
        <a class="c-accordion__toggle" data-expand-all="true"></a>
        <li class="c-accordion__item is-active" data-accordion-item>
          <a href="#accordion-panel1" class="c-accordion__title"><h2 class="c-accordion__heading">Accordion 1</h2></a>
          <div class="c-accordion__content" data-tab-content id="accordion-panel1">
            <p>Accordion content</p>
          </div>
        </li>
        <li class="c-accordion__item" data-accordion-item>
          <a href="#accordion-panel2" class="c-accordion__title"><h2 class="c-accordion__heading">Accordion 1</h2></a>
          <div class="c-accordion__content" data-tab-content id="accordion-panel2">
            <p>Accordion content</p>
          </div>
        </li>
        <li class="c-accordion__item" data-accordion-item>
          <a href="#accordion-panel3" class="c-accordion__title"><h2 class="c-accordion__heading">Accordion 1</h2></a>
          <div class="c-accordion__content" data-tab-content id="accordion-panel3">
            <p><a href="#0">Accor<span>dion</span></a> content</p>
          </div>
        </li>
        <li class="c-accordion__item" data-accordion-item>
          <a href="#accordion-panel4" class="c-accordion__title"><h2 class="c-accordion__heading">Accordion 1</h2></a>
          <div class="c-accordion__content" data-tab-content id="accordion-panel4">
            <p>Accordion content</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="c-tabs__panel" id="tab-panel2">
      <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
    </div>
    <div class="c-tabs__panel" id="tab-panel3">
      <img src="assets/img/generic/rectangle-3.jpg">
    </div>
    <div class="c-tabs__panel" id="tab-panel4">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
</div>

<div class="c-tabs__container">
  <ul class="c-tabs js-tabs" data-tabs id="collapsing-tabs">
    <li class="c-tabs__title is-active-item"><a href="#tab-panel5" aria-selected="true">Tab 5</a></li>
    <li class="c-tabs__title"><a href="#tab-panel6">Tab 6</a></li>
    <li class="c-tabs__title"><a href="#tab-panel7">Tab 7</a></li>
    <li class="c-tabs__title"><a href="#tab-panel8">Tab 8</a></li>
  </ul>
  
  <div class="c-tabs__content" data-tabs-content="collapsing-tabs">
    <div class="c-tabs__panel is-active-panel" id="tab-panel5">
      <p>Bacon ipsum dolor amet swine sirloin hamburger, turducken picanha venison shank pancetta. Pork loin boudin shankle ribeye short ribs pancetta shoulder spare ribs beef ribs jowl. Pancetta tongue venison doner corned beef burgdoggen strip steak porchetta sirloin kevin beef biltong meatloaf. T-bone venison brisket, pork loin drumstick tenderloin capicola kevin. Spare ribs ham hock kevin boudin tail chicken ribeye flank tri-tip bacon. Meatloaf capicola shoulder alcatra turducken tenderloin jerky kielbasa corned beef.</p>
    </div>
    <div class="c-tabs__panel" id="tab-panel6">
      <p>Tongue burgdoggen hamburger shankle doner. Kevin tri-tip capicola sausage salami frankfurter. Pork chop brisket doner spare ribs, filet mignon corned beef rump strip steak pancetta tail cow short loin ground round cupim picanha. Boudin spare ribs flank chuck tri-tip.</p>
    </div>
    <div class="c-tabs__panel" id="tab-panel7">
      <img src="assets/img/generic/rectangle-3.jpg">
    </div>
    <div class="c-tabs__panel" id="tab-panel8">
      <p>Tenderloin pork loin tri-tip bresaola corned beef, pastrami brisket beef buffalo jerky sausage prosciutto frankfurter. Shoulder pig ground round leberkas pork loin kielbasa flank chicken doner ham hock. Swine meatloaf turducken burgdoggen cupim, flank beef ribs ham ground round pork loin tri-tip pork. Ball tip jerky tail meatloaf kevin shoulder strip steak filet mignon hamburger meatball beef cow. Frankfurter meatloaf pork chop pastrami bacon picanha short ribs. Salami strip steak boudin jerky shoulder.</p>
    </div>
  </div>
</div>
