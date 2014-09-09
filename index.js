var Filer = require('filer');
var fs = new Filer.FileSystem({provider: new Filer.FileSystem.providers.Fallback());

module.exports = function(options) {
  options = options || {};
  return fs.Shell(options);
}