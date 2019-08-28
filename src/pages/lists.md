---
title: Lists
description: Documentation for lists.
static-demo: static-lists
---

## Index lists

Index lists are numbered ordered list where nested lists use decimal index numbers.

```html_example
<ol class="c-full-index">
  <li>Cheese (essential)</li>
  <li>Pepperoni</li>
  <li>Bacon
    <ol>
      <li>Normal bacon</li>
      <li>Bacon
        <ol>
          <li>Normal bacon</li>
          <li>Canadian bacon</li>
        </ol>
      </li>
    </ol>
  </li>
  <li>Sausage</li>
  <li>Onions</li>
  <li>Mushrooms</li>
</ol>
```

## Link lists

Links lists are just simply a grid system for lists. You can use any typ of lists such as ordered, unordered or index lists. The markup demo nbelow shows the required grid system markup. By default the link list grid system will display in a two column layout. You may apply either the three column or four column modifier classes:

- `has-three-columns`
- `has-four-columns`

```html
<div class="c-link-list has-four-columns">
  <div class="c-link-list__column">
    <h2 class="c-link-list__title">#Section Title</h2>
    <ul>
      <li><a href="#0">#Link Item 1</a></li>
      <li>#Link Item 2</li>
      <li><a href="#0">#Link Item 3</a></li>
    </ul>
  </div>
  <!-- ... -->
</div>
```
