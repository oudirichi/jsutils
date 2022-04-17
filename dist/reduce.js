"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var isObject_1 = __importDefault(require("./isObject"));
function reduce(item, fn, startAcc) {
    if (startAcc === void 0) { startAcc = []; }
    if ((0, isObject_1.default)(item)) {
        return Object.entries(item).reduce(function (acc, _a) {
            var k = _a[0], v = _a[1];
            return fn(acc, v, k);
        }, startAcc);
    }
    else {
        return item.reduce(function (acc, v, k) { return fn(acc, v, k); }, startAcc);
    }
}
module.exports = reduce;
