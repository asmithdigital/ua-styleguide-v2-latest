// JavaScript Debounce Function
// By David Walsh
// http://davidwalsh.name/javascript-debounce-function

function debounce(func, wait, immediate) { // eslint-disable-line no-unused-vars
  let timeout;

  return function () {
    let context = this,
      args = arguments,
      later = function() {
        timeout = null;

        if (!immediate) {
          func.apply(context, args);
        }
      },
      callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait || 500);

    if (callNow) {
      func.apply(context, args);
    }
  };
}
