// ORIGINAL

// "use strict";

// var util = require('util');
// var errors = module.exports = {};

/**
 * Thrown or returned when `get` returns `null`.
 * @extends MappingError //WAS ThinkyError
 */
// errors.DocumentNotFound = function(message) {
  // var errorMessage = message || "The query did not find a document and returned null.";
  // errors.MappingError.call(this, errorMessage); //WAS errors.ThinkyError.call(this, errorMessage);
  // this.name = 'DocumentNotFoundError';
// };
// util.inherits(errors.DocumentNotFound, errors.MappingError);//WAS util.inherits(errors.DocumentNotFound, errors.ThinkyError); <= THIS WE STILL NEED TO IMPLEMENT, EITHER HERE OR BETTER IN THE server


// NEW

var self = this;

/**
 * Create a new DocumentNotFound that let users create sub-documentnotfound.
 * @return {DocumentNotFound}
 */
function DocumentNotFound(message) {
  self._errorMessage = message || "The query did not find a document and returned null.";
  self._mappingerror.call(this, self._errorMessage);
  this.name = 'DocumentNotFoundError';
}

DocumentNotFound.prototype.mappingerror = function() {
  return self._mappingerror;
}

DocumentNotFound.prototype.setmappingerror = function(fnOrValue) {
  self._mappingerror = fnOrValue;
}

module.exports = DocumentNotFound;
