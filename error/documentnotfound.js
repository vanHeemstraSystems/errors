"use strict";

// var util = require('util');
var errors = module.exports = {};

// /**
 // * Thrown or returned when `get` returns `null`.
 // * @extends MappingError //WAS ThinkyError
 // */
// errors.DocumentNotFound = function(message) {
  // var errorMessage = message || "The query did not find a document and returned null.";
  // errors.MappingError.call(this, errorMessage); //WAS errors.ThinkyError.call(this, errorMessage);
  // this.name = 'DocumentNotFoundError';
// };
// util.inherits(errors.DocumentNotFound, errors.MappingError);//WAS util.inherits(errors.DocumentNotFound, errors.ThinkyError);