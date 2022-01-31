"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uniq_1 = __importDefault(require("./uniq"));
// eslint-disable @typescript-eslint/no-explicit-any
function concat(arr1, ...arrs) {
    return (0, uniq_1.default)(arr1.concat(...arrs));
}
exports.default = concat;
