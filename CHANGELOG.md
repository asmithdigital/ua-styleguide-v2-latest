# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

Style guide v2, 0.42.0, [UNRELEASED]
-----------------------------------
- Bugs fixed in this release:
    * Adjust font color for blockquote and tables for inverse promo item

Style guide v2, 0.41.1, [2019-07-18]
-----------------------------------
- Bugs fixed in this release:
    * Fix is dark promo item title color when no nested anchor

Style guide v2, 0.41.0, [2019-07-08]
-----------------------------------
- Features included in this release:
    * Filter content combination filter menu fuctionality
    * Add scrollBar polyfill JS plugin and CSS to improve responsive horizontal scrolling tables
    * Increase button group button spacing
    * Adjustments to lead text paragraph style spacing
- Bugs fixed in this release:
    * Import Promise pollyfill to global-assets-loader.js
- Breaking changes in this release:
    * HTML class name change for filter content title

Style guide v2, 0.40.0, [2019-06-21]
-----------------------------------
- Features included in this release:
    * Remove the need for class on video content heading WCMS2-648
        - any heading element within video content section will be styled exactly the same

Style guide v2, 0.39.2, [2019-06-20]
-----------------------------------
- Bugs fixed in this release:
    * reinstate z-index for content zone to allow for campaign background color styles

Style guide v2, 0.39.1, [2019-06-19]
-----------------------------------
- Bugs fixed in this release:
    * Fix local footer stakcing bug and reinstate original WCMS-555 issues

Style guide v2, 0.39.0, [2019-06-18]
-----------------------------------
- Features included in this release:
    * Two thirds content grid column

Style guide v2, 0.38.0, [2019-06-06]
-----------------------------------
- Bugs fixed in this release:
    * Adjust positioning of container elements to ensure proper stacking when absolute positioned contextual editing CSS is applied
    * Adjustments to filternav and media object titles to ensure long words dont break and wrap
    * Adjust column grid 3&4 columns to be 2 columns on tablet down breakpoint
    * Adjustment to RSS feed layouts stack date when in 2 col grid and mobile resolution
- Features included in this release:
    * Docs included for campaign layouts and light hollow button
    * Bottom aligned footer for media objects and promo items
    * Stand alond video component with content to be used in content grid
    * Collapsed content grid on 2, 3 & 4 column grid
    * Basic tooltips
- Breaking changes in this release:
    * Reposition of hamburger menu in site-title to allow floating
    * Slight update to the video grid HTML to incorporate new stand alone video component

Style guide v2, 0.37.1, [2018-03-01]
-----------------------------------
- Features included in this release:
  * reverted the hyphens and only add them to filter nav titles

Style guide v2, 0.37.0, [2018-02-19]
-----------------------------------
- Bugs fixed in this release:
  * Fix full width services menu off canvas styles
  * Fix services menu colors after above bug fix
  * Include hyphens to to long text/links which require overflow-wrap & word-wrap
- Features included in this release:
  * feature/funnelback changed search link to funnelback
  * Fixed CSS specifiity issues with inverse colors
  * Merged an old branch for tooltips work in progress which may or may not ever be completed
  * Progress bar
  * feature/screen-size-visibility-utilities
- Breaking changes in this release:
  * `is-inverse` class now required for inverse colors in campaign layouts

Style guide v2, 0.36.2, [2018-12-12]
-----------------------------------
- Bugs fixed in this release:
  * Additional css class for accordions nested within tabs to fix deepLinking conflict

Style guide v2, 0.36.1, [2018-11-30]
-----------------------------------
- Bugs fixed in this release:
  * filter nav style guide docs updated

Style guide v2, 0.36.0, [2018-11-29]
-----------------------------------
- Features included in this release:
  * feature/portriat-media-object-size-docs
- Breaking changes in this release:
  * change to filter nav HTML
- Bugs fixed in this release:
  * Fix site menu z-index
  * update quicklinks and mega menu simple markup to avoide FOC

Style guide v2, 0.35.0, [2018-11-22]
-----------------------------------
- Features included in this release:
  * feature/WCMS2-498-campaign-slider
  * feature/portrait-media-objects
  * more researcher social images

Style guide v2, 0.34.0, [2018-11-19]
-----------------------------------
- Features included in this release:
  * feature/WCMS2-405-image-gallery-size-docs
  * new colors variations for filter nav & sortable functionality
  * feature/WCMS2-498-campaign-slider
- Bugs fixed in this release:
  * fixed width on pagination items causing width issue on numbers greater that 3 digits
  * mega menu overlay behind content
- Breaking changes in this release:
  * filter nav filter and sort is now left aligneed by default (centered class required)
  * Filter nav content button box HTML has changed 

Style guide v2, 0.33.1, [2018-11-13]
-----------------------------------
- Bugs fixed in this release:
  * Mega menu button color CSS specificity bug

Style guide v2, 0.33.0, [2018-11-09]
-----------------------------------
- Features included in this release:
  * feature/WCMS2-472-accordion-anchor-bug
  * feature/WCMS2-479-campaign-half-columns
- Breaking changes in this release:
  * Complete rebuild of campaign markup - no legacy support

Style guide v2, 0.32.0, [2018-10-29]
-----------------------------------
- Features included in this release:
  * feature/WCMS2-289-campaign-layout

Style guide v2, 0.31.0, [2018-10-25]
-----------------------------------
- Features included in this release:
  * feature/accessiblity-testing-tools
  * feature/WCMS2-330-404-pages
  * feature/WCMS2-397-image-gallery-caption
  * feature/WCMS2-459-skip-to-content
- Bugs fixed in this release:
  * fix for long labels wrapping to new line next to radio or checkbox input
- Breaking changes in this release:
  * Header footer template small title must use modifier class `is-small`

Style guide v2, 0.30.0, [2018-10-23]
-----------------------------------
- Features included in this release:
  * feature/WCMS2-137-a-z-media-object-thumb
  * feature/WCMS2-408-image-grid
  * feature/WCMS2-441-local-echo360-video-embedd
- Bugs fixed in this release:
  * adjustments to ensure components work correctly within content grid

Style guide v2, 0.29.0, [2018-10-12]
-----------------------------------
- Features included in this release:
  * feature/WCMS2-370-sortable-filterable-tables
  * Promo item and additional content grid options
- Breaking changes in this release:
  * Media object markup changed

Style guide v2, 0.28.0, [2018-10-09]
-----------------------------------
- Features included in this release:
  * Allow media object nested within accordion and tabs
- Bugs fixed in this release:
  * fix for 4 column filter nav grid which was forcing 3 column on Chrome windowz
  * feature/WCMS2-394-multi-audio-playlist

Style guide v2, 0.27.0, [2018-09-27]
-----------------------------------
- Features included in this release:
  * feature/WCMS2-56-374-events

Style guide v2, 0.26.0, [2018-09-21]
-----------------------------------
- Features included in this release:
  * Generic two column grid
- Breaking changes in this release:
  * media-object.js renamed to equaliser.js
- Bugs fixed in this release:
  * fix margin bottom specificity on A-Z nested within accordion

Style guide v2, 0.25.1, [2018-09-17]
-----------------------------------
- Bugs fixed in this release:
  * Turn off tabs active collapse
  * Fix smooth scroll `$ is not a function`

Style guide v2, 0.25.0, [2018-09-06]
-----------------------------------
- Features included in this release:
  * Minimal banner and page title for header footer template
  * WCMS2-348 Smooth scroll and back-to-top button
  * WCMS2-350 Previous next pagination
- Bugs fixed in this release:
  * Mega menu list fix spacing multi level heading

Style guide v2, 0.24.0, [2018-08-22]
-----------------------------------
- Features included in this release:
  * WCMS2-328: Fix multiple tabs on a single page
- Bugs fixed in this release:
  * Inherited button styles with nested anchors in local footer

Style guide v2, 0.23.0, [2018-08-10]
-----------------------------------
- Features included in this release:
  * Native HTML video pollyfill 
  * Add toggle accordion functionality for all open/closed to switch open all state
  * Additoonal new feed image options and docs
  * Enable to ability to remove the date from RSS feeds
- Bugs fixed in this release:
  * Darken blockquotes text color for accessibility
  * Fix accordion open all toggle double click bug
  * Fix for nsted anchors within `.c-btn` element
  * Quick fix for site menu line-height and spacing

Style guide v2, 0.22.1, [2018-07-27]
-----------------------------------
- Bugs fixed in this release:
  * js error when loading df search instance to page without component

Style guide v2, 0.22.0, [2018-07-27]
-----------------------------------
- Features included in this release:
  * WCMS2-236-degree-finder
- Bugs fixed in this release:
  * Local footer button color bug

Style guide v2, 0.21.0, [2018-07-11]
-----------------------------------
- Features included in this release:
  * Dynamic external link, new window and document icons
  * Minor style improvement for blockquotes and video grid
- Bugs fixed in this release:
  * Remove vegas slider data attributes from DOM after plugin loaded 

Style guide v2, 0.20.0, [2018-06-07]
-----------------------------------
- Features included in this release:
  * Site menu additional submenu toggle functionality options
  * Image size and ratio documentation for images, media objects, news feed posts & image gallery
  * Improve header search form layout for mobile
- Bugs fixed in this release:
  * Ensure media object equalizer heights calculate after image load

Style guide v2, 0.19.0, [2018-05-09]
-----------------------------------
- Features included in this release:
  * Link lists grid system
  * Icon font documentation
  * Audio player and playlist

Style guide v2, 0.18.0, [2018-04-24]
-----------------------------------
- Features included in this release:
  * Add support for docker-compose >1.21.0, breaking change - fixed in dsh script
- Bugs fixed in this release:
  * Fix jQuery $ alias issue in autocomplete search plugin javascript

Style guide v2, 0.17.0, [2018-04-19]
-----------------------------------
- Features included in this release:
  * Adaptive images interchange.js plugin
  * HTML5 `<picture>` element support
- Bugs fixed in this release:
  * Remove duplicates and css specificity issues

Style guide v2, 0.16.0, [2018-04-18]
-----------------------------------
- Features included in this release:
  * Adaptive images interchange.js plugin

Style guide v2, 0.15.0, [2018-03-27]
-----------------------------------
- Features included in this release:
  * Stand alone social icon block
  * Ordered list where nested lists use decimal index numbers
  * Ability to set a cookie on callout close trigger event

Style guide v2, 0.14.0, [2018-03-26]
-----------------------------------
- Features included in this release:
  * Login button which aligns with the breadcrumbs
  * Degree finder layouts
  * Closable callout component
- Bugs fixed in this release:
  * Fix broken style for button within degree finder advanced search grid

Style guide v2, 0.13.0, [2018-03-21]
-----------------------------------
- Features included in this release:
  * Fixed position local footer columns modifier classes
- Potential markup breaking changes:
  * Fix the global-assets-plugin.js bug, this fix changed the way the setting must be passed in as an object
  * Old local footer markup no longer supported
  * update the local footer social icon path and rename global footer social icon file names
  * Global assets CSS and JS paths updated to new location on TMS server

Style guide v2, 0.12.1, [2018-03-15]
-----------------------------------
- Bugs fixed in this release:
  * Remove duplicate CSS in header footer css
  * Fix site menu submenu arrow alignment

Style guide v2, 0.12.0, [2018-03-14]
-----------------------------------
- Features included in this release:
  * Load first filter nav option

Style guide v2, 0.11.2, [2018-03-09]
-----------------------------------
- Bugs fixed in this release:
  * Fix mega menu heading text-transform

Style guide v2, 0.11.1, [2018-03-09]
-----------------------------------
- Bugs fixed in this release:
  * update to the correct blue

Style guide v2, 0.11.0, [2018-03-09]
-----------------------------------
- Features included in this release:
  * Global Assets CSS now contains most color definitions
- Bugs fixed in this release:
  * Provide vegas overlay fallback path

Style guide v2, 0.10.3, [2018-02-26]
-----------------------------------
- Bugs fixed in this release:
  * Fix header footer template global paths
  * Fix global assets demo page link

Style guide v2, 0.10.2, [2018-02-26]
-----------------------------------
- Features included in this release:
  * Global assets documentation for search

Style guide v2, 0.10.1, [2018-02-22]
-----------------------------------
- Bugs fixed in this release:
  * fix broken quick links menu partial static demo

Style guide v2, 0.10.0, [2018-02-22]
-----------------------------------
- Features included in this release:
  * Mega menu, quick links menu and global footer global assets plugins and docs

Style guide v2, 0.9.0, [2018-02-16]
-----------------------------------
- Features included in this release:
  * Filter nav grid component
  * Add optional overlay feature to Vegas JS
  * Stand alone header and footer assets split out of app.css and app.js
- Bugs fixed in this release:
  * Correctly inject jQuery into JS plugins
  * modify tabs active class to allow nested accordions
- Potential markup breaking changes:
  * Local footer markup changed

Style guide v2, 0.8.0, [2017-12-15]
-----------------------------------
- Features included in this release:
  * Split mega menu and global footer assets
  * feature/VISV-40-news-feed-list-post-items
  * feature/VISV-34-featured-content
  * feature/VISV-21-image-gallery
  * Enable anchor linking to Tabs and Accordions
- Bugs fixed in this release:
  * Allow anchor functionality for Tabs and Accordions

Style guide v2, 0.7.0, [2017-11-03]
-----------------------------------
- Features included in this release:
  * Add navigation and custom transition duration options to slider
  * Equalize heights on stacked media objects
  * Disabled buttons
  * Form grid
  * Autocomplete
  * Services menu
  * Button colors
  * Degree finder grid
  * Tabs
- Bugs fixed in this release:
  * fix quicklinks menu layout
  * mega menu image layout bug
  * Local footer buttons color

Style guide v2, 0.6.0, [2017-10-12]
-----------------------------------
- Features included in this release:
  * Degree finder advanced search form
  * Degree finder search
  * Anchor styles: global, component headings, breadcrumb

Style guide v2, 0.5.1, [2017-10-06]
-----------------------------------
- Bugs fixed in this release:
  * Fix heading custom font load

Style guide v2, 0.5.0, [2017-10-06]
-----------------------------------
- Features included in this release:
  * Finalised headings, site title and small text fonts and general typography
  * Finalised standard, full width and campaign layout
  * Images: figure, figcaption, sizes and floats

Style guide v2, 0.4.0, [2017-09-27]
-----------------------------------
- Features included in this release:
  * Pagination
  * A-Z list
  * RSS Feeds

Style guide v2, 0.3.1, [2017-09-26]
-----------------------------------
- Bugs fixed in this release:
  * Fix build problem with broken dependency and missing probe.htm

Style guide v2, 0.3.0, [2017-09-25]
-----------------------------------
- Features included in this release:
  * Hidden H1 for screen readers
  * Media Objects
  * Local footer
  * Responsive tables
  * Responsive video container and grid
  * Open and close all toggle for accordions
  * Add custom footer social and logo images
  * Transpile JS plugins to ES5 into js/dist/plugins 
  * Complete global footer layout and design
  * Complete base template, standard and full width layouts
  * Search layout and off canvas
  * Header footer template
  * Complete site menu & mega menu
  * Initial folder structure
  * Site and header menu start point
  * Js plugins and scss set up
  * Initial release
  