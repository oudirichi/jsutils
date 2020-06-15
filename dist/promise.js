"use strict";

function defer() {
  const deferred = {};
  const promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  deferred.promise = promise;
  return deferred;
}

function isPromise(subject) {
  return subject instanceof Promise; // return isObject(subject) && typeof subject.then == 'function';
}

module.exports = {
  defer,
  isPromise
};