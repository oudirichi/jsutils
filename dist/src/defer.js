"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function defer() {
    let promiseResolve;
    let promiseReject;
    const promise = new Promise((resolve, reject) => {
        promiseResolve = resolve;
        promiseReject = reject;
    });
    const deferred = {
        promise,
        reject: promiseReject,
        resolve: promiseResolve,
    };
    return deferred;
}
exports.default = defer;
