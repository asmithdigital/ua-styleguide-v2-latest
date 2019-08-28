import 'moment/moment.js';
import 'datatables.net/js/jquery.dataTables.js';
import 'datatables.net-responsive/js/dataTables.responsive.js';
import 'datetime-moment/datetime-moment.js';

(function ($) {
  $.fn.dataTable.moment('D MMM YYYY');
  $.fn.dataTable.moment('DD/MM/YYYY');
  $.fn.dataTable.moment('D MMM YYYY, h:mma');
  $.fn.dataTable.moment('dddd, MMMM D, YYYY');
  $.fn.dataTable.moment('D MMM YYYY, h:mma[ - ]h:mma');

  $(function () { 

    $('.js-table-sortable').DataTable({ // eslint-disable-line new-cap
      dom: '<"c-table-sortable"' +
      '<"c-table-sortable__top"' +
      '<"c-table-sortable__length c-table-sortable__left"l>' +
      '<"c-table-sortable__filter c-table-sortable__right"f>>' +
      '<"c-table-sortable__processing"r>' +
      '<"c-table-sortable__table"t>' +
      '<"c-table-sortable__bottom"' +
      '<"c-table-sortable__information c-table-sortable__left"i>' +
      '<"c-table-sortable__pagination c-table-sortable__right"p>>>',
      pagingType: 'simple',
      oLanguage: {
        sSearch: 'Filter:',
        sSearchPlaceholder: 'filter by keyword...'
      },
      responsive: true
    });
  });
})(jQuery);
