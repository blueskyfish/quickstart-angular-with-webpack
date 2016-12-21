/**
 * Quickstart with Angular and Less - https://github.com/blueskyfish/quickstart-angular-with-webpack.git
 */


const path = require('path');

const ROOT = path.join(__dirname, '..');


module.exports.root = function (args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [ROOT].concat(args));
};
