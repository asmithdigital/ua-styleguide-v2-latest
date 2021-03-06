---
title: Tables
description: Documentation for tables.
static-demo: static-table
data-table: true
---

## Native table HTML

Tables are standard native HTML5. Please **DO NOT USE** table attributes which have been deprecated in the HTML5 spec, such as `align`, `bgcolor`, `border`, `cellpadding`, `cellspacing`, `width`, `valign` etc as per the [MDN web docs table reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table). Only use attributes that are not deprecated within HTML5 spec.

```html
<table>
  <thead>
    <tr>
      <th>This is the description!</th>
      <th>One</th>
      <!-- ... -->
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="display:block; width:400px;">Use inline CSS</td>
      <td>Cool</td>
      <!-- ... -->
    </tr>
    <!-- ... -->
  </tbody>
  <tfoot>
    <tr>
      <td>Here's a footer, just in case</td>
      <td></td>
      <!-- ... -->
    </tr>
  </tfoot>
</table>
```

## Sortable and Filterable

Sortable tables sort the data in a table's column. By clicking on the table header cell, users can sort the data as they wish. 

There are also filterable elements that are dynamically generated by the JavaScript plugin. A drop down select list and a search form are added at the top of the table. The 'Filter' input search form allows users to filter the content and show only the rows which contain a specific word or words. The drop down select list allows the user to display a specific number of rows.

By default, 15 rows are shown on a page. Using the `data-page-length` attribute as seen in the example below, you are able to define the number of rows that are visible to the user when the page loads. Additionally, you may choose to order a particular column to be ascending or descending by default when the page loads. This can be achieved with the use of the `data-order` attribute. This attribute must be formatted as an arry of arrays ie, `[["0", "asc"],["1", "asc"]]`. Each inner array is comprised of two elements:
- Column index to order upon - zero based index, ie:
  - column 1 = index `0`
  - column 2 = index `1` etc
- Direction so order to apply (`asc` for ascending order or `desc` for descending order)

Columns are sorted based on content, however; generally they sort alphabetically, or in the following date/day/time formats:
- 01/12/2017
- 1 Dec 2017
- Friday, December 1, 2017
- 1 Dec 2017, 1:00pm
- 1 Dec 2017, 1:00pm - 2:00pm

_Note: users need to use one of the above formats on all cells in a chosen column in order to sort the content correctly._

```html
<table class="c-table no-wrap js-table-sortable" data-page-length="5" data-order="[[ 1, &quot;asc&quot; ]]">
  <thead>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Date 1</th>
    <th>Date 2</th>
    <th>Date 3</th>
    <th>Date 4</th>
    <th>Date 5</th>
    <th>Salary</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Tiger Nixon</td>
    <td>61</td>
    <td>25/04/2011</td>
    <td>25 Apr 2011</td>
    <td>Friday, April 25, 2011</td>
    <td>25 Apr 2011, 2:00pm</td>
    <td>25 Apr 2011, 2:00pm - 3:00pm</td>
    <td>$320,800</td>
  </tr>
  <!-- ... -->
  </tbody>
</table>
```

## JavaScript

The following JavaScript plugin is required in order to ensure that the horizontal scrollbar is visible to browsers who automatically hide the scrollbar and also do not support the webkit scrollbar CSS

- `js/plugins/tables-scrollbar.js`

The following JavaScript plugin for datatables is too large to build into `app.jquery.js` so it must be included seperately to the page which you plan to implement the datatables HTML.

- `js/plugins/datatables.js`
