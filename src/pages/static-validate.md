---
title: Form validation
description: Static demonstration client side JS form validation.
layout: static
static: true
---

## Form validation

<form class="c-form c-form--validate" novalidate>

  <div data-abide-error class="c-form__alert-callout" style="display: none;">
    <p><i class="fi-alert"></i> There are some errors in your form.</p>
  </div>
  <label>Number Required
    <input type="text" placeholder="1234" aria-describedby="exampleHelpText" required pattern="number">
    <span class="c-form__error-text">
      Yo, you had better fill this out, it's required.
    </span>
  </label>
  <p class="c-form__help-text" id="exampleHelpText">Here's how you use this input field!</p>
  <label>Nothing Required!
    <input type="text" placeholder="Use me, or don't" aria-describedby="exampleHelpTex" data-abide-ignore>
  </label>
  <p class="c-form__help-text" id="exampleHelpTex">This input is ignored by Abide using `data-abide-ignore`</p>
  <label>Password Required
    <input type="password" id="password" placeholder="yeti4preZ" aria-describedby="exampleHelpText" required >
    <span class="c-form__error-text">
      I'm required!
    </span>
  </label>
  <p class="c-form__help-text" id="exampleHelpText">Enter a password please.</p>
  <label>Re-enter Password
    <input type="password" placeholder="yeti4preZ" aria-describedby="exampleHelpText2" required pattern="alpha_numeric" data-equalto="password">
    <span class="c-form__error-text">
      Hey, passwords are supposed to match!
    </span>
  </label>
  <p class="c-form__help-text" id="exampleHelpText2">This field is using the `data-equalto="password"` attribute, causing it to match the password field above.</p>
  <div class="c-form__row">
    <div class="c-form__column">
      <label>URL Pattern, not required, but throws error if it doesn't match the Regular Expression for a valid URL.
        <input type="text" placeholder="http://foundation.zurb.com" pattern="url">
      </label>
    </div>
    <div class="c-form__column">
      <label>European Cars, Choose One, it can't be the blank option.
        <select id="select" required>
          <option value=""></option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </label>
    </div>
  </div>
  <div class="c-form__row">
    <fieldset class="c-form__column">
      <legend>Choose Your Favorite, and this is required, so you have to pick one.</legend>
      <input type="radio" name="pokemon" value="Red" id="pokemonRed"><label for="pokemonRed">Red</label>
      <input type="radio" name="pokemon" value="Blue" id="pokemonBlue" required><label for="pokemonBlue">Blue</label>
      <input type="radio" name="pokemon" value="Yellow" id="pokemonYellow"><label for="pokemonYellow">Yellow</label>
    </fieldset>
    <fieldset class="c-form__column">
      <legend>Choose Your Favorite - not required, you can leave this one blank.</legend>
      <input type="radio" name="pockets" value="Red" id="pocketsRed"><label for="pocketsRed">Red</label>
      <input type="radio" name="pockets" value="Blue" id="pocketsBlue"><label for="pocketsBlue">Blue</label>
      <input type="radio" name="pockets" value="Yellow" id="pocketsYellow"><label for="pocketsYellow">Yellow</label>
    </fieldset>
    <fieldset class="c-form__column">
      <legend>Check these out</legend>
      <input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label>
      <input id="checkbox2" type="checkbox" required><label for="checkbox2">Checkbox 2</label>
      <input id="checkbox3" type="checkbox"><label for="checkbox3">Checkbox 3</label>
    </fieldset>
  </div>
  <div class="c-form__row">
    <fieldset class="c-form__column">
      <button class="c-form__button" type="submit" value="Submit">Submit</button>
    </fieldset>
    <fieldset class="c-form__column">
      <button class="c-form__button" type="reset" value="Reset">Reset</button>
    </fieldset>
  </div>
</form>

