"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isObject_1 = __importDefault(require("./isObject"));
function map(object, fn) {
    if ((0, isObject_1.default)(object)) {
        return Object.entries(object).map(([k, v]) => fn(v, k));
    }
    else {
        return object.map((v, k) => fn(v, k));
    }
}
exports.default = map;
