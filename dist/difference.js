"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uniq_1 = __importDefault(require("./uniq"));
const concat_1 = __importDefault(require("./concat"));
function difference(arr1, ...arrs) {
    if (!arrs.length)
        return arr1;
    const all = (0, concat_1.default)([], ...arrs);
    const indexed = all.reduce((acc, item) => { acc[item] = item; return acc; }, {});
    return (0, uniq_1.default)(arr1.filter((value) => !(value in indexed)));
}
exports.default = difference;
