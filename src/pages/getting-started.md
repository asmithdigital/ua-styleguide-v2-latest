---
title: Getting started
description: Documentation for getting started.
---



## Download assets

The first step you need to take is to download the style guide V2 theme assets into your project from the University of Adelaide [style guide V2 repository](https://gitlab.adelaide.edu.au/web-team/ua-styleguide-v2-theme).

<div class="alert callout">
<p>Please **DO NOT** download the full assets if you do not wish to implement the entire style guide into your application because CSS and JavaScript in the style guide will conflict with your application code. You should use the **[header and footer](#header-and-footer-template)** template instead.</p>
</div>

```bash
git clone git@gitlab.adelaide.edu.au:web-team/ua-styleguide-v2-theme.git
```

<a href="https://gitlab.adelaide.edu.au/web-team/ua-styleguide-v2-theme/repository/master/archive.zip" class="button large" target="_blank"><i class="fa fa-download"></i> Download .zip</a>

### Referencing CSS and JavaScript

The following built assets can be referenced within your project from the downloaded assets.

```html
├─ css/app.css         complete css build
└─ js
   ├─ app.jquery.js    complete JS build including jQuery
   └─ app.js           complete JS build without jQuery
```

If you prefer to develop your own custom build and JavaScript dependency management, then please read the [JavaScript page](javascript.html). 

## Header and footer template

The header and footer template is only used if as a 3rd party application develop you wish to apply the University style guide header and footer to your application **ONLY**.

<div class="alert callout">
<p>Please **DO NOT** use the header and footer template if you intend to use other components within the style guide because the header and footer CSS and JavaScript **only** contain relevant styles and functionality for the elements found within the header and footer.</p>
</div>

Please ensure that you copy the header and footer template HTML exactly a you see it, including the CSS and JavaScript references.

<a href="https://gitlab.adelaide.edu.au/web-team/ua-styleguide-v2-theme/blob/master/header-footer/header-footer.html" class="button large" target="_blank">Download header and footer template</a>

<a href="static-header-footer.html" class="button" target="_blank">View header footer demo</a>
