$(function() {
  'use strict';

  var df_data_requested = false;
  var dfsearchlist = [];
  var $search_field = $('#df-searchfield');
  if ($search_field.length == 0) $search_field = $('#searchfield');

  var search_year = $search_field.data('js-year');
  if (search_year) {
    search_year -= 0; // convert to number
  } else {
    search_year = (new Date()).getYear() + 1900;
  }

  var app_url = '/degree-finder/';

  $.widget( "custom.catcomplete", $.ui.autocomplete, {
    _create: function() {
      this._super();
      this.widget().menu( "option", "items", "> :not(.ui-autocomplete-category)" );
    },
    _renderMenu: function( ul, items ) {
      var that = this,
        currentCategory = "";
      $.each( items, function( index, item ) {
        var li;
        if ( item.category != currentCategory ) {
          ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
          currentCategory = item.category;
        }
        li = that._renderItemData( ul, item );
        if ( item.category ) {
          li.attr( "aria-label", item.category + " : " + item.label );
        }
      });
    },
    _renderItem: function(ul, item) {
      return $('<li />')
        .data('item.autocomplete', item)
        .append($('<a />').text(item.label))
        .appendTo(ul);
    }
  });

  $search_field.catcomplete({
    // disabled: true,
    source: dfsearchlist
  });

  // triggers on every focus
  $search_field.focus(function() {
    // Only will call the ajax post until we have a successful retrieve, hopefully only once.
    if (! df_data_requested) {
      df_data_requested = true;

      // Ajax call to get JSON object.
      $.ajax({
        type: 'POST',
        async: false,
        url: 'data/' + search_year + '.json', // testing local data to avoid CORS
        // url: '/webteam/dfsearch/' + search_year,
        dataType: 'json',
        cache: true,
        success: function(json) {
          dfsearchlist = json.data;
        }
      });

      $search_field.catcomplete({
        disabled: false,
        source: dfsearchlist,
        minLength: 2,
        select: function(event, ui) {
          if ((ui.item.category == 'Undergraduate Programs') ||
            (ui.item.category == 'Postgraduate Coursework Programs') ||
            (ui.item.category == 'Higher Degrees by Research')) {
            window.location = app_url + ui.item.dest + '.html';
          }
          else if (ui.item.category == 'Careers') {
            dfSearchForm('v_career', ui.item.dest);
          }
          else if (ui.item.category == 'Subjects') {
            dfSearchForm('v_subject', ui.item.dest);
          }

          return true;
        },
        search: function(event, ui){
          return true;
        }
      });
    }
  });

  function dfSearchForm(action, searchval) {
    var params = {
      m: 'view',
      dsn: 'program.source_program',
      year: search_year,
      v_avail_comm: 1
    };
    params[action] = searchval;
    window.location = app_url + '?' + jQuery.param(params);
  }



  // / Ready
});
