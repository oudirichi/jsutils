"use strict";

function defer() {
  var deferred = {};
  var promise = new Promise(function (resolve, reject) {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  deferred.promise = promise;
  return deferred;
}

module.exports = {
  defer: defer
};