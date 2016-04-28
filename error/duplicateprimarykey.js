"use strict";

// var util = require('util');
var errors = module.exports = {};

// /**
 // * Thrown or returned when the primary key unique document constraint fails.
 // * @extends MappingError //WAS ThinkyError
 // */
// errors.DuplicatePrimaryKey = function(message, primaryKey) {
  // errors.MappingError.call(this, message); //WAS errors.ThinkyError.call(this, message);
  // this.name = 'DuplicatePrimaryKeyError';
  // if (primaryKey !== undefined) {
    // this.primaryKey = primaryKey;
  // }
// };
// util.inherits(errors.DuplicatePrimaryKey, errors.MappingError); //WAS util.inherits(errors.DuplicatePrimaryKey, errors.ThinkyError);