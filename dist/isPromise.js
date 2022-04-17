"use strict";
function isPromise(subject) {
    return subject instanceof Promise;
}
module.exports = isPromise;
