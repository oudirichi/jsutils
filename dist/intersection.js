"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var uniq_1 = __importDefault(require("./uniq"));
function intersection(arr1) {
    var arrs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arrs[_i - 1] = arguments[_i];
    }
    if (arrs.length === 0)
        return arr1;
    var arr2 = intersection.apply(void 0, __spreadArray([arrs[0]], arrs.slice(1), false));
    var indexed = arr2.reduce(function (acc, item) { acc[item] = item; return acc; }, {});
    return (0, uniq_1.default)(arr1.filter(function (value) { return value in indexed; }));
}
module.exports = intersection;
