import tippy from '../../../node_modules/tippy.js'

(function($) {

  // FD tooltip
  // ============
  let $tooltip = $('.js-tippy');

  if($tooltip.length) {

    // Tooltip.js
    // ============
    const template = document.querySelector('#template .here');
    const initialText = template.textContent;

    const tipie = tippy('.tippy', {
      html: '#template',
      interactive: true,
      animation: 'shift-toward',
      arrow: true,
      arrowType: 'round',
      theme: 'light',
      maxWidth: '300px',
      onShow() {
        const content = this.querySelector('.tippy-content .here');
        const closie = this.querySelector('.tippie-close');
        const $thisTippy = this;
        const thisTippyGlossary = $($thisTippy._tippy.reference).data('glossary');
        const glossaryDataPath = "data/glossary.json";

        function updateTippyHTML(data){
          let glossaryHTML = "";
          let termie = false;
          $.each(data.data, function(i, v){
            if (v.term === thisTippyGlossary) {
              console.log('true ', v.term, thisTippyGlossary);
              termie = true;
              glossaryHTML += '<h3>' + v.term + '</h3>';
              glossaryHTML += '<p>' + v.desc + '</p>';
              glossaryHTML += '<a href="#">' + v.term + '</a>';
            }
          });
          if (termie) {
            content.innerHTML = glossaryHTML;
          } else {
            content.innerHTML = "No term for you";
          }
          tipie.loading = false;
        }

        if (tipie.loading || content.innerHTML !== initialText) return;

        tipie.loading = true;

        // Close on clickie
        $(closie).on('click', function(){
          $thisTippy._tippy.hide();
        });

        $.getJSON(glossaryDataPath, updateTippyHTML).fail(function( jqxhr, textStatus, error ) {
            let err = textStatus + ", " + error;
            console.log("Request Failed: " + err);
          });

      },
      onHidden() {
        const content = this.querySelector('.tippy-content .here');
        content.innerHTML = initialText
      }
    });
    
  }

})(jQuery);
