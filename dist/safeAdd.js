"use strict";
function safeAdd(obj, key, item) {
    if (!(key in obj))
        obj[key] = item;
    return obj[key];
}
module.exports = safeAdd;
