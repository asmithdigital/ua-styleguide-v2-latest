---
title: Progress bar
description: Static demonstration of progress bar.
layout: static
static: true
---

<div class="o-layout__content-row">
  <div class="o-layout__content-column-half o-layout--full-height">
    <div class="c-featured-content">
      <h2>Printing account</h2>
      <p>Current balance for period 1, 2018: <strong>$94.30</strong></p>
      <div class="c-progress">
        <div class="c-progress__container" role="progressbar" tabindex="0" aria-valuenow="25" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100">
          <span class="c-progress__meter" style="width: 25%">
            <p class="c-progress__meter-text">25%</p>
          </span>
        </div>
        <div class="c-progress__text">
          <p class="c-progress__text-left">$0</p>
          <p class="c-progress__text-right">$120</p>
        </div>
        <a href="#0" class="c-btn c-btn--secondary">Topup now</a>
      </div>
    </div>
  </div>
  <div class="o-layout__content-column-half o-layout--full-height">
    <div class="c-featured-content">
      <h2>My library summary</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="width:85%">Loans</td>
            <td>16</td>
          </tr>
          <tr>
            <td>Requests</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Payments outstanding</td>
            <td>$0</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
