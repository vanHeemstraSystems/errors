// ORIGINAL

// "use strict";

// var util = require('util');
// var errors = module.exports = {};

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
// util.inherits(errors.DuplicatePrimaryKey, errors.MappingError); //WAS util.inherits(errors.DuplicatePrimaryKey, errors.ThinkyError); <= THIS WE STILL NEED TO IMPLEMENT, EITHER HERE OR BETTER IN THE server


// NEW

var self = this;

/**
 * Create a new DuplicatePrimaryKey that let users create sub-duplicateprimarykey.
 * @return {DuplicatePrimaryKey}
 */
function DuplicatePrimaryKey(message, primaryKey) {
  self._errorMessage = message || "A duplicate primary key error.";
  self._mappingerror.call(this, self._errorMessage);
  this.name = 'DuplicatePrimaryKeyError';
  if (primaryKey !== undefined) {
    this.primaryKey = primaryKey;
  }  
}

DuplicatePrimaryKey.prototype.mappingerror = function() {
  return self._mappingerror;
}

DuplicatePrimaryKey.prototype.setmappingerror = function(fnOrValue) {
  self._mappingerror = fnOrValue;
}

module.exports = DuplicatePrimaryKey;
