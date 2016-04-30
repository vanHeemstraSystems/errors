// ORIGINAL

// "use strict";

// var util = require('util');
// var errors = module.exports = {};

// /**
 // * Thrown or returned when an in place update/replace returns an invalid document.
 // * @extends MappingError //WAS ThinkyError
 // */
// errors.InvalidWrite = function(message, raw) {
  // errors.MappingError.call(this, message); //WAS errors.ThinkyError.call(this, message);
  // this.name = 'InvalidWriteError';
  // this.raw = raw;
// };
// util.inherits(errors.InvalidWrite, errors.MappingError); //WAS util.inherits(errors.InvalidWrite, errors.ThinkyError); <= THIS WE STILL NEED TO IMPLEMENT, EITHER HERE OR BETTER IN index.js

// NEW

var self = this;

/**
 * Create a new InvalidWrite that let users create sub-invalidwrite.
 * @return {InvalidWrite}
 */
function InvalidWrite(message, raw) {
  self._errorMessage = message || "An invalid write error.";
  self._mappingerror.call(this, self._errorMessage);
  this.name = 'InvalidWriteError';
  if (raw !== undefined) {
    this.raw = raw;
  }  
}

InvalidWrite.prototype.mappingerror = function() {
  return self._mappingerror;
}

InvalidWrite.prototype.setmappingerror = function(fnOrValue) {
  self._mappingerror = fnOrValue;
}

module.exports = InvalidWrite;
