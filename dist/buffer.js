"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function json() {
  return {
    buffer: [],

    next(data) {
      this.buffer.push(data);

      try {
        let json = JSON.parse(Buffer.concat(this.buffer).toString('utf8'));
        this.reset();
        return json;
      } catch (error) {
        return false;
      }
    },

    reset() {
      this.buffer.length = 0;
    }

  };
}

var _default = {
  json
};
exports.default = _default;