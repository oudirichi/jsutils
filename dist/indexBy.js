"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const replicate_1 = __importDefault(require("./replicate"));
function indexBy(col, ...args) {
    const acc = {};
    const last = args.pop();
    function groupKeys(item, groupKey) {
        const key = (groupKey instanceof Function) ? groupKey(item) : item[groupKey];
        return Array.isArray(key) ? key : [key];
    }
    col.forEach((item) => {
        let current = [acc];
        args.forEach((arg) => {
            const keys = groupKeys(item, arg);
            current = (0, replicate_1.default)(current, keys, {});
        });
        const keys = groupKeys(item, last);
        (0, replicate_1.default)(current, keys, item);
    });
    return acc;
}
exports.default = indexBy;
