"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_1 = require("./object");
function reduce(item, fn, startAcc = []) {
    if ((0, object_1.isObject)(item)) {
        return Object.entries(item).reduce((acc, [k, v]) => fn(acc, v, k), startAcc);
    }
    else {
        return item.reduce((acc, v, k) => fn(acc, v, k), startAcc);
    }
}
exports.default = reduce;
