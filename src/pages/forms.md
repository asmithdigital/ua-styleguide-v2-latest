---
title: Forms
description: Documentation for forms.
static-demo: static-form
---

## Form basics

By default, when you place form elements in a form, as seen in the example below, they will expand 100% width. If you require the form to be laid out in a two or three column grid then please read the [grid section](#grid).

Labels are required for input elements. You can choose to wrap the label around the input or you can place the label along side the input element. If you choose to place the label along side the input element then you must ensure you include the `id` on the input element and reference this with the `for=""` attribute on the label element.
 
Also, ensure that you wrap a group of checkboxes or radio buttons in a fieldset element, and give them a common label using the legend element. 

```html
<form class="c-form">
  <fieldset>
    <legend>Pick a radio</legend>
    <input type="radio" name="radiogroup" value="radio1" id="radio1" required><label for="radio1">Radio 1</label>
    <input type="radio" name="radiogroup" value="radio2" id="radio2"><label for="radio2">Radio 2</label>
  </fieldset>
  <fieldset>
    <legend>Pick some checkboxes</legend>
    <label><input type="checkbox" required>Checkbox 1</label>
    <label><input type="checkbox">Checkbox 2</label>
  </fieldset>
  <label>Input Label
    <input type="text" placeholder="hello" required>
  </label>
  <label>How many puppies?
    <input type="number" value="100" required>
  </label>
  <label>What books did you read?
    <textarea placeholder="None"></textarea>
  </label>
  <label>Select Menu
    <select>
      <option value="husker">Husker</option>
      <option value="starbuck">Starbuck</option>
      <option value="hotdog">Hot Dog</option>
      <option value="apollo">Apollo</option>
    </select>
  </label>
  <button class="c-form__button" type="submit" value="Submit">Submit</button>
</form>
```

## File upload

The file upload button requires one of the following example markup. The label can wrap the input element or the label can sit along side the input element. As mentioned above, the `id` and `for=""` attributes are required when the label sits along side the input element. Either way, the class `c-btn` is required on the label element and the class `c-form--hidden` is required on the input element.

```html
<label class="c-btn">Upload File
  <input name="" type="file" class="c-form--hidden">
</label>
<label for="exampleFileUpload" class="c-btn">Upload File</label>
<input name="" type="file" id="exampleFileUpload" class="c-form--hidden">
```

## Help text

Place help text below a field to clarify its purpose. Whenever you use help text, give the text a unique `id`, and add the attribute `aria-describedby` to the input. Doing so associates the helper text to the input. A screen reader then can read the helper text when the user focusses on the input.

```html
<label>Input Label
  <input type="text" placeholder="hello" aria-describedby="exampleHelpText">
</label>
<p class="c-form__help-text" id="exampleHelpText">Here's how you use this input field!</p>
```

## Input group

The input group is best placed within a full width layout. This is because it may become too narrow within a two or three column grid layout and may become difficult for users to enter into the input element. The span element with the class `c-form__input-group-label` is not compulsory but the remaining markup is.

```html
<div class="c-form__input-group">
  <span class="c-form__input-group-label">$</span>
  <input class="c-form__input-group-field" type="url">
  <div class="c-form__input-group-button">
    <button class="c-form__button" type="submit" title="Search">Search</button>
  </div>
</div>
```

## Grid

The form grid system is comprised of a row, which wraps columns. By default, columns are displayed as two column layout and there must only be two columns within a row. There is also a modifier class `has-three-columns` which may be placed on the row element, which will display each column as three column grid, in which case there must only be three columns within a row.

You may place any element that you wish to be displayed as full width either above, between or below a row. This may include any native form element, file upload or the input group component.

**Please do not nest a row within a row.**

```html
<form class="c-form">
  <!-- Full width form elements may be placed here -->
  <div class="c-form__row has-three-columns">
    <fieldset class="c-form__column">
      <legend>Choose Your Favorite</legend>
      <input type="radio" name="pokemon" value="Red" id="pokemonRed" required><label for="pokemonRed">Red</label>
      <input type="radio" name="pokemon" value="Blue" id="pokemonBlue"><label for="pokemonBlue">Blue</label>
    </fieldset>
    <fieldset class="c-form__column">
      <legend>Check these out</legend>
      <label>
        <input type="checkbox">
        Checkbox 1
      </label>
      <label>
        <input type="checkbox">
        Checkbox 2
      </label>
    </fieldset>
    <div class="c-form__column">
      <label>
        What books did you read?
        <textarea placeholder="None"></textarea>
      </label>
    </div>
  </div>
  <div class="c-form__row">
    <div class="c-form__column">
      <button class="c-form__button" type="submit" value="Submit">Submit</button>
    </div>
    <div class="c-form__column">
      <button class="c-form__button" type="reset" value="Reset">Reset</button>
    </div>
  </div>
</form>
```

## Inline label and input

The inline label input is similar to the above mentioned form grid in that it will display two columns, however these two columns are not both 50% in width. The inline label and input component must **only** include a label in the left column and an input element in the right column. **If you wish to display two column grid with different form elements then please use the above mentioned two column [form grid](#grid). **

The inline label and input component contains a row but instead of nested column classes it includes modifier classes to the column classes `--left` and `--right`, as seen in the example below. 

You must apply one of the following classes to the label element:
- `c-form__inline-columns--right`
- `c-form__inline-columns-label--middle`
- `c-form__inline-columns-label--middle-right`

The above mentioned label class ending in `--right` will simply align the label text to the right. The class ending in `--middle` will align the label text to the vertical middle while remaining aligned to the left. The class ending `--middle-right` will align the label text to both the right and the vertical middle, as seen in the example below.

You must also remember to associate the label with the input element with the use of the `id` and `for=""` attributes.

**Please do not nest the inline label input component with a form grid row. It must be placed above, between or below any grid rows.**

```html
<div class="c-form__row">
  <div class="c-form__inline-columns--left">
    <label for="middle-label" class="c-form__inline-columns-label--middle-right">Label</label>
  </div>
  <div class="c-form__inline-columns--right">
    <input type="text" id="middle-label" placeholder="Right- and middle-aligned text input">
  </div>
</div>
```
