// ORIGINAL

// "use strict";

// var util = require('util');
// var errors = module.exports = {};

// /**
 // * The base error that all Mapping (WAS thinky) related errors derive from
 // *
 // * @constructor
 // * @alias Error
 // */
// //WAS errors.ThinkyError = function() {
// errors.MappingError = function() {
  // var tmp = Error.apply(this, arguments);
  // tmp.name = this.name = 'MappingError'; //WAS 'ThinkyError';

  // this.message = tmp.message;
  // if (Error.captureStackTrace)
    // Error.captureStackTrace(this, this.constructor);
// };
// util.inherits(errors.MappingError, Error); //WAS util.inherits(errors.ThinkyError, Error); <= THIS WE STILL NEED TO IMPLEMENT, EITHER HERE OR BETTER IN THE server

// NEW

var self = this;

/**
 * Create a new MappingError that let users create sub-mappingerror.
 * @return {MappingError}
 */
function MappingError() {
  var tmp = Error.apply(this, arguments);
  tmp.name = this.name = 'MappingError';
  this.message = tmp.message;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor); 
  } 
}

module.exports = MappingError;
 