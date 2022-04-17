"use strict";
function defer() {
    var promiseResolve;
    var promiseReject;
    var promise = new Promise(function (resolve, reject) {
        promiseResolve = resolve;
        promiseReject = reject;
    });
    var deferred = {
        promise: promise,
        reject: promiseReject,
        resolve: promiseResolve,
    };
    return deferred;
}
module.exports = defer;
