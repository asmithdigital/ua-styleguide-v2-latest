---
title: Filter content
description: Documentation for filter content.
tags:
  - navigation
static-demo: static-filter-content
---

## Filter content grid

The filter content grid is made up of the parent wrapper element with the class of `c-filter-nav` which wraps any number of columns. By default, this wrapper element will be a 2 column grid. This may also be modified to have anywhere from 3, 4, 5 columns. As seen in the example below, the class `has-four-columns` will produce a four column content grid. The following classes may be added to produce the grid columns:
- `has-three-columns`
- `has-four-columns`
- `has-five-columns`

Each column has the class of `c-filter-nav__column` which can contain any kind of content.

As seen in the example below, there is a position where the filter and the sort menus go, which must be wrapped in the `<div class="c-filter-nav__container">` element. See below for further information about these menus.

```html
<div class="c-filter-nav__container">
  <!-- Filter menu goes here -->
  <!-- Sort menu goes hete -->
</div>
<div class="c-filter-nav has-four-columns">
  <div class="c-filter-nav__column">
    <!-- Filter content goes here -->
  </div>
  <!-- ... -->
</div>
```

## Filter menu

The filter menu is compulsory.

The filter menu sits above the filter content grid as seen in the above **Filter content grid** example where you see the html comment `<!-- Filter menu goes here -->`. This menu is the filter menu that controls what is filtered within the content when the user clicks a menu item.

The filter menu uses jQuery to filter items (if jQuery is present). You can filter items with [jQuery selectors](http://api.jquery.com/category/selectors/). The selector must be placed within the `data-filter=""` attribute, as seen in the example below.

These example selectors relate to the example seen under the heading [filter content](#filter-content) below where the filter content markup is explained.

```html
<div class="c-filter-nav__group js-filter-nav-filter">
  <p class="c-filter-nav__button is-label">Filter by:</p>
  <a class="c-filter-nav__button is-checked" data-filter="*">All</a>
  <a class="c-filter-nav__button" data-filter=".metal">metal</button>
  <a class="c-filter-nav__button" data-filter=".transition">transition</button>
  <a class="c-filter-nav__button" data-filter=".alkali, .alkaline-earth">alkali and alkaline-earth</button>
  <a class="c-filter-nav__button" data-filter=":not(.transition)">not transition</button>
  <a class="c-filter-nav__button" data-filter=".metal:not(.transition)">metal but not transition</button>
  <a class="c-filter-nav__button" data-filter="numberGreaterThan50">number > 50</button>
  <a class="c-filter-nav__button" data-filter="ium">name ends with &ndash;ium</button>
</div>
```

## Sort menu

The sort menu is optional.

The sort menu sits above the filter content grid as seen in the above **Filter content grid** example where you see the html comment `<!-- Sort menu goes here -->`. Filter content may be sorted by either name, symbol, number, weight or category. Each of these are sorted based on their type, for example name, and symbol will be sorted alphabetically and number and weight will be sorted as numbers. 

Examples of the selectors that may be used are seen in the example below. These selectors relate to the example seen under the heading [filter content](#filter-content) below where the filter content markup is explained.

```html
<div class="c-filter-nav__group js-filter-nav-sorts">
  <p class="c-filter-nav__button is-label">Sort by:</p>
  <a class="c-filter-nav__button is-checked" data-sort-by="original-order">original order</a>
  <a class="c-filter-nav__button" data-sort-by="name">Name</a>
  <a class="c-filter-nav__button" data-sort-by="symbol">symbol</a>
  <a class="c-filter-nav__button" data-sort-by="number">number</a>
  <a class="c-filter-nav__button" data-sort-by="weight">weight</a>
  <button class="c-filter-nav__button" data-sort-by="category">Category</a>
</div>
```

## Menu label and alignment

As seen in the exampled above, both the filter and sort menus contain a label element. This is not compulsory and may be removed if you wish.

```html
<p class="c-filter-nav__button is-label">Filter/Sort by:</p>
```

Also, as seen in the examples above, the filter and sort menu are both left aligned by default. In order to center align the menu you may place the class `is-centered` onto the wrapper element as per the example below:

```html
<div class="c-filter-nav__group js-filter-nav-sorts is-centered">
```

## Filter content

As mentioned in the above sections which explain the Filter and Sort menus, the example markup below shows the filterable and sortable content that may be placed within the filter content grid column. Filterable selectors must be placed onto the column items as well as the `data-category` definition. Each of the sort classes may be placed onto the content elements themselves directly.

_* This is just one example of how filter content may be used. You are free to use this in the way that suits your project. _

```html
<div class="c-filter-nav__column transition metal" data-category="transition">
  <h3 class="name">Mercury</h3>
  <p class="symbol">Hg</p>
  <p class="number">80</p>
  <p class="weight">200.59</p>
</div>
```

## Filter content button box

The filter content box is one component that may be placed within a filter content grid column. It may or may not be wrapped in an anchor. The button box element has a light grey background with a red background hover by default. In order to change this background and hover background color style, you may apply the following optional classes in the position as seen in the demo markup below where you see `is-primary`:
- `is-primary`
- `is-secondary`
- `is-success`
- `is-warning`
- `is-alert`
- `is-hollow-light`
- `is-hollow-dark`

These class names match the names used for buttons. Notice also in the example below the use of the `name` sortable class which, if the sort menu is used, will sort the content button box in alphabetical order based on the title element.

```html
<a href="#">
  <div class="c-filter-nav__button-box is-primary">
    <h4 class="c-filter-nav__button-box--title name">First</h4>
  </div>
</a>
```

## Load first filter

By default, the filter will load the "all" filter on page load. If you decide that you do not want the all filter and would like to select which filter should load first on page load, you can use the `u-filter-load-first` class as seen in the demo below. 

Dont forget to also apply the `is-checked` class to the same filter otherwise the style will not reflect the currently checked item and will be confusing to the user.

```html
<div class="c-filter-nav__group js-filter-nav-filter">
  <a class="c-filter-nav__button u-filter-load-first is-checked" data-filter=".first">Load me first</a>
  <a class="c-filter-nav__button" data-filter=".another-filter">Another filter</a>
</div>
```

## JavaScript

- `js/plugins/filter-grid.js`
