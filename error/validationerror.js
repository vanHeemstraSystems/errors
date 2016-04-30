// ORIGINAL

// "use strict";

// var util = require('util');
// var errors = module.exports = {};

// /**
 // * Thrown or returned when validation of a document fails.
 // * @extends MappingError //WAS ThinkyError
 // */
// errors.ValidationError = function(message) {
  // errors.MappingError.call(this, message); //WAS errors.ThinkyError.call(this, message);
  // this.name = 'ValidationError';
// };
// util.inherits(errors.ValidationError, errors.MappingError); //WAS util.inherits(errors.ValidationError, errors.ThinkyError); <= THIS WE STILL NEED TO IMPLEMENT, EITHER HERE OR BETTER IN THE server


// NEW

var self = this;

/**
 * Create a new ValidationError that let users create sub-validationerror.
 * @return {ValidationError}
 */
function ValidationError(message) {
  self._errorMessage = message || "A validation error.";
  self._mappingerror.call(this, self._errorMessage);
  this.name = 'ValidationError';
}

ValidationError.prototype.mappingerror = function() {
  return self._mappingerror;
}

ValidationError.prototype.setmappingerror = function(fnOrValue) {
  self._mappingerror = fnOrValue;
}

module.exports = ValidationError;
