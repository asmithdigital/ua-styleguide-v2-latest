import AutocompleteSearch from './autocomplete-search-plugin'

const autocompleteSettings = {
  noResults: true,
  noResultsParams: {
    sitePath: 'adelaide.edu.au',
    url: 'https://search.adelaide.edu.au/s/search.html?collection=uoa-search&q={{query}}&sitesearch={{site}}'
  }
};

let autocomplete = new AutocompleteSearch($('.js-autocomplete__search-wrapper'), autocompleteSettings); // eslint-disable-line no-unused-vars
