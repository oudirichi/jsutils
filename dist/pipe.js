"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pipe(...functions) {
    return (args) => functions.reduce(async (arg, fn) => {
        return fn(await arg);
    }, args);
}
exports.default = pipe;
