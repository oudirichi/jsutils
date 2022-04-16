"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function uniq(arr) {
    if (typeof arr == 'number')
        arr = '' + arr;
    if (typeof arr == 'string') {
        arr = arr.split('');
    }
    return Array.from(new Set(arr));
}
exports.default = uniq;
