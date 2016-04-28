/*
 * errors.js
 */
var ErrorsError = require(__dirname+'/error.js');

/**
 * Create a new Errors that let users create sub-errors.
 * @return {Errors}
 */
function Errors() { }

/**
 * Create a new ErrorsError object.
 * @return {ErrorsError}
 */
Errors.prototype.error = function() {
  return new ErrorsError();
}

module.exports = Errors;
