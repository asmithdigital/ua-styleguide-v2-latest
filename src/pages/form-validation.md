---
title: Form validation
description: Documentation for client side form validation.
static-demo: static-validate
---

## Set up

When using client side form validation you need to apply the class `c-form--validate` to the form element. The atttribute `novalidate` must also be applied in order to disable any browser validation functionality which could conflict with the validation plugin functionality.

The alert callout must be placed directly within the opening form element. This is where you may list a message to alert the user that the form contains errors. It may also be a good idea to list what the errors are for accessibility reasons.

```html
<form class="c-form c-form--validate" novalidate>
  <div data-abide-error class="c-form__alert-callout" style="display: none;">
    <p><i class="fi-alert"></i> There are some errors in your form.</p>
  </div>
  <!-- Form elements -->
</form>
```

## Required

The `required` attribute must be applied to any input element which you wish to make a required field. If you are using a particular input type other than a text input, a radio/checkbox group, textarea or select element then you will want to also include the `pattern=""` attribute. Since we have disabled the browser native form validation functionality, we need to specify the pattern in which this particular input validation must adhere to in order to become valid. 

The following patterns and validators are available to be used within the `pattern=""` attribute:
`alpha`, `alpha_numeric`, `card`, `color`, `cvv`, `date`, `dateISO`, `datetime`, `day_month_year`, `domain`, `email`, `integer`, `month_day_year`, `number`, `time`, `url`.

When validating a match between two password fields, you must use the `data-equalto=""` attribute, as seen in the example below. The value used in the `data-equalto=""` attribute must match the `id` attribute of the password input which it is requiring the user to match. 

```html
<label>Re-enter Password
  <input type="password" placeholder="yeti4preZ" aria-describedby="exampleHelpText2" required pattern="alpha_numeric" data-equalto="password">
</label>
```

## Error and Help text

The form error text and the help text are both hidden to the user until they either submit the form without entering anything into the required field, or when they enter something which is not valid and then remove focus from the required element.

The error text must be placed directly below the input/select/textarea element whilst also inside the label element. The help text must be placed directly below the label element.

Please also remember to use the `aria-describedby=""` attribute on the input/select/textarea element which references the `id` attribute on the help text element, to ensure a screen reader can read the help text when the user focusses on the input.

```html
<label>Number Required
  <input type="text" placeholder="1234" aria-describedby="exampleHelpText" required pattern="number">
  <span class="c-form__error-text">
    Yo, you had better fill this out, it's required.
  </span>
</label>
<p class="c-form__help-text" id="exampleHelpTex">This input is ignored by Abide using `data-abide-ignore`</p>
```

## JavaScript

- `js/plugins/form.js`
