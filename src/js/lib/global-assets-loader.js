import 'core-js/es6/promise';
import axios from 'axios';
import GlobalAssets from './global-assets-plugin';

class GlobalAssetsLoader {

  constructor(filePaths) {

    this.filePaths = filePaths;

    let promises = [];
    const context = this;

    Object.keys(filePaths).forEach(function(key) {
      let obj = filePaths[key];
      promises.push(context.getFile(obj.path));
    });

    this.requestHandler(promises);
  }
  getFile(path) {
    return axios.get(path);
  }
  requestHandler(promises) {
    axios.all(promises)
      .then(axios.spread((...partials) => {
        let paths = this.filePaths;
        let selectors = {};
        Object.keys(paths).forEach(function(key, index) {
          let selector = paths[key].selector;
          // Add to object of selectors.
          // if its the footer .. ignore it, it has no js.
          if (key !== 'footer') {
            selectors[key] = '#' + selector;
          }
          // Add the partial into the DOM.
          document.getElementById(selector).outerHTML = partials[index].data;
        });
        // Pass the selectors array and use the spread operator.
        this.mm = new GlobalAssets(selectors);
      }));
  }

}

// Add to global scope.
window.GlobalAssetsLoader = GlobalAssetsLoader;
