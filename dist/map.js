"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var isObject_1 = __importDefault(require("./isObject"));
function map(object, fn) {
    if ((0, isObject_1.default)(object)) {
        return Object.entries(object).map(function (_a) {
            var k = _a[0], v = _a[1];
            return fn(v, k);
        });
    }
    else {
        return object.map(function (v, k) { return fn(v, k); });
    }
}
module.exports = map;
