"use strict";

// var util = require('util');
var errors = module.exports = {};

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
// util.inherits(errors.MappingError, Error); //WAS util.inherits(errors.ThinkyError, Error);