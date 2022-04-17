"use strict";
function uniq(arr) {
    if (typeof arr == 'number')
        arr = '' + arr;
    if (typeof arr == 'string') {
        arr = arr.split('');
    }
    return Array.from(new Set(arr));
}
module.exports = uniq;
