/*
 * index.js
 */
var ErrorDocumentNotFound = require(__dirname+'/documentnotfound.js');
var ErrorDuplicatePrimaryKey = require(__dirname+'/duplicateprimarykey.js');
var ErrorInvalidWrite = require(__dirname+'/invalidwrite.js');
var ErrorMappingError = require(__dirname+'/mappingerror.js');
var ErrorValidationError = require(__dirname+'/validationerror.js');

var self = this;

/**
 * Create a new _Error that let users create sub-error.
 * @return {_Error}
 */
function _Error() { // Error is a reserved word in JavaScript, hence _Error
  /**
   * regular expressions used to determine which errors should be thrown
   */
  self._DOCUMENT_NOT_FOUND_REGEX = new RegExp('^The query did not find a document and returned null.*');
  self._DUPLICATE_PRIMARY_KEY_REGEX = new RegExp('^Duplicate primary key `(.*)`.*');
}

_Error.prototype.documentnotfoundregex = function() {
  return self._DOCUMENT_NOT_FOUND_REGEX;
}

_Error.prototype.duplicateprimarykeyregex = function() {
  return self._DUPLICATE_PRIMARY_KEY_REGEX;
}

/**
 * Creates an appropriate error given either an instance of Error or a message
 * from the RethinkDB driver
 */
_Error.prototype.create = function(errorOrMessage) {
  var message = (errorOrMessage instanceof Error) ? errorOrMessage.message : errorOrMessage; // Error here referes to the JavaScript Error Object
  //ORIGINAL if (message.match(errors.DOCUMENT_NOT_FOUND_REGEX)) {
  if (message.match(self.documentnotfoundregex())) {
    //ORIGINAL return new errors.DocumentNotFound(message);
    return new self.documentnotfound(message);
  //ORIGINAL } else if (message.match(errors.DUPLICATE_PRIMARY_KEY_REGEX)) {
  } else if (message.match(self.duplicateprimarykeyregex())) {
    //ORIGINAL var primaryKey = message.match(errors.DUPLICATE_PRIMARY_KEY_REGEX)[1];
    var primaryKey = message.match(self.duplicateprimarykeyregex())[1];
    //ORIGINAL return new errors.DuplicatePrimaryKey(message, primaryKey);
    return new self.duplicateprimarykey(message, primaryKey);
  } else if (errorOrMessage instanceof Error) {
    return errorOrMessage;
  }
  //ORIGINAL return new errors.MappingError(errorOrMessage); //WAS errors.ThinkyError(errorOrMessage);
  return new ErrorMappingError(errorOrMessage);
}

/**
 * Create a new ErrorDocumentNotFound object.
 * @return {ErrorDocumentNotFound}
 */
_Error.prototype.documentnotfound = function() {
  this._errorDocumentNotFound = new ErrorDocumentNotFound;
  this._errorDocumentNotFound.setmappingerror(self.mappingerror());
  //return new ErrorDocumentNotFound();
  return this._errorDocumentNotFound();
}

/**
 * Create a new ErrorDuplicatePrimaryKey object.
 * @return {ErrorDuplicatePrimaryKey}
 */
_Error.prototype.duplicateprimarykey = function() {
  return new ErrorDuplicatePrimaryKey();
}

/**
 * Create a new ErrorInvalidWrite object.
 * @return {ErrorInvalidWrite}
 */
_Error.prototype.invalidwrite = function() {
  return new ErrorInvalidWrite();
}

/**
 * Create a new ErrorMappingError object.
 * @return {ErrorMappingError}
 */
_Error.prototype.mappingerror = function() {
  return new ErrorMappingError();
}

/**
 * Create a new ErrorValidationError object.
 * @return {ErrorValidationError}
 */
_Error.prototype.validationerror = function() {
  return new ErrorValidationError();
}

module.exports = _Error;


/* IMPLEMENT BELOW CODE INTO INDIVIDUAL modules (e.g. DocumentNotFound.js) AND REFER TO THEM FROM HERE */

//         ------------------  DONE -----------------------

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
// util.inherits(errors.MappingError, Error); //WAS util.inherits(errors.ThinkyError, Error);

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

// /**
 // * Thrown or returned when an in place update/replace returns an invalid document.
 // * @extends MappingError //WAS ThinkyError
 // */
// errors.InvalidWrite = function(message, raw) {
  // errors.MappingError.call(this, message); //WAS errors.ThinkyError.call(this, message);
  // this.name = 'InvalidWriteError';
  // this.raw = raw;
// };
// util.inherits(errors.InvalidWrite, errors.MappingError); //WAS util.inherits(errors.InvalidWrite, errors.ThinkyError);

// /**
 // * Thrown or returned when validation of a document fails.
 // * @extends MappingError //WAS ThinkyError
 // */
// errors.ValidationError = function(message) {
  // errors.MappingError.call(this, message); //WAS errors.ThinkyError.call(this, message);
  // this.name = 'ValidationError';
// };
// util.inherits(errors.ValidationError, errors.MappingError); //WAS util.inherits(errors.ValidationError, errors.ThinkyError);

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

// /**
 // * regular expressions used to determine which errors should be thrown
 // */
// errors.DOCUMENT_NOT_FOUND_REGEX = new RegExp('^The query did not find a document and returned null.*');
// errors.DUPLICATE_PRIMARY_KEY_REGEX = new RegExp('^Duplicate primary key `(.*)`.*');

// /**
 // * Creates an appropriate error given either an instance of Error or a message
 // * from the RethinkDB driver
 // */
// errors.create = function(errorOrMessage) {
  // var message = (errorOrMessage instanceof Error) ? errorOrMessage.message : errorOrMessage;
  // if (message.match(errors.DOCUMENT_NOT_FOUND_REGEX)) {
    // return new errors.DocumentNotFound(message);
  // } else if (message.match(errors.DUPLICATE_PRIMARY_KEY_REGEX)) {
    // var primaryKey = message.match(errors.DUPLICATE_PRIMARY_KEY_REGEX)[1];
    // return new errors.DuplicatePrimaryKey(message, primaryKey);
  // } else if (errorOrMessage instanceof Error) {
    // return errorOrMessage;
  // }

  // return new errors.MappingError(errorOrMessage); //WAS errors.ThinkyError(errorOrMessage);
// };

