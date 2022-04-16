"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function safeAdd(obj, key, item) {
    if (!(key in obj))
        obj[key] = item;
    return obj[key];
}
exports.default = safeAdd;
