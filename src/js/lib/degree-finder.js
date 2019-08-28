import DegreeFinder from './degree-finder-plugin';

const settings = {
  apiBaseUrl: '/webteam/dfsearch/',
};

if ($('#df-searchfield').length) {
  let autocomplete = new DegreeFinder($('#df-searchfield'), settings); // eslint-disable-line no-unused-vars
}
