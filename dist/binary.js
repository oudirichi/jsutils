"use strict";

var _require = require('./string'),
    charCode = _require.charCode;

function toBinary(string) {
  var pad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  var data = charCode(string).map(function (e) {
    return e.toString(2).padStart(pad, 0);
  });
  return data.join(' ');
}

function toString(string) {
  return string.split(' ').map(function (_char) {
    return String.fromCharCode(parseInt(_char, 2));
  }).join('');
}

module.exports = {
  toBinary: toBinary,
  toString: toString
};