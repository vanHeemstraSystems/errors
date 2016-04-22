/*
 * errors.js
 *
 * input: input - an Object
 *
 * output: resolve - a Promise
 */
module.exports = function() {
  console.log('errors - called');
  var _Me = {};
  var path = require('../libraries/path');
  var paths = require('../paths/paths'); 
  var promise = require(path.join(paths.libraries, '/promise.js'));
  var _error = require(__dirname+'/error.js'); // change this into a function that returns a Promise
  var join = promise.join;
  return new promise(function(resolve) {
    join(_error(), function(type) {
      _Me.error = error;
    }); // eof join
    console.log('errors - resolve(_Me): ', _Me);
    resolve(_Me);
  }) // eof promise
  .catch(function(error) {
    console.log('errors - error: ', error);
  }) // eof catch
  .finally(function() {
    console.log('errors - finally');
  }); // eof finally
} // eof module
