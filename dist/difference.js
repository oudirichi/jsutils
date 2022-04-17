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
var union_1 = __importDefault(require("./union"));
function difference(arr1) {
    var arrs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arrs[_i - 1] = arguments[_i];
    }
    if (!arrs.length)
        return arr1;
    var all = union_1.default.apply(void 0, __spreadArray([[]], arrs, false));
    var indexed = all.reduce(function (acc, item) { acc[item] = item; return acc; }, {});
    return (0, uniq_1.default)(arr1.filter(function (value) { return !(value in indexed); }));
}
module.exports = difference;
