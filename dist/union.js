"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var uniq_1 = __importDefault(require("./uniq"));
function union(arr1) {
    var arrs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arrs[_i - 1] = arguments[_i];
    }
    return (0, uniq_1.default)(arr1.concat.apply(arr1, arrs));
}
module.exports = union;
