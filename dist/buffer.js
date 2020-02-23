"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function json() {
  return {
    buffer: [],
    next: function next(data) {
      this.buffer.push(data);

      try {
        var _json = JSON.parse(Buffer.concat(this.buffer).toString('utf8'));

        this.reset();
        return _json;
      } catch (error) {
        return false;
      }
    },
    reset: function reset() {
      this.buffer.length = 0;
    }
  };
}

var _default = {
  json: json
};
exports["default"] = _default;