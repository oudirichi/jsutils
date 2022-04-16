"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_1 = require("./object");
function reduce(object, fn, startAcc = {}) {
    if ((0, object_1.isObject)(object)) {
        return Object.entries(object).reduce((acc, [k, v]) => fn(acc, v, k), startAcc);
    }
    else {
        return object.reduce((acc, v, k) => fn(acc, v, k), startAcc);
    }
}
exports.default = reduce;
