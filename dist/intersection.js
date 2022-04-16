"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uniq_1 = __importDefault(require("./uniq"));
function intersection(arr1, ...arrs) {
    if (arrs.length === 0)
        return arr1;
    const arr2 = intersection(arrs[0], ...arrs.slice(1));
    const indexed = arr2.reduce((acc, item) => { acc[item] = item; return acc; }, {});
    return (0, uniq_1.default)(arr1.filter((value) => value in indexed));
}
exports.default = intersection;
