"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _marked =
/*#__PURE__*/
_regenerator["default"].mark(range);

function range(start, end) {
  var i;
  return _regenerator["default"].wrap(function range$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          i = start;

        case 1:
          if (!(i <= end)) {
            _context.next = 7;
            break;
          }

          _context.next = 4;
          return i;

        case 4:
          i++;
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

module.exports = {
  range: range
};