"use strict";
function nullToUndefined(obj) {
    if (obj === null)
        return undefined;
    if (!(obj instanceof Object))
        return obj;
    var ret = {};
    Object.keys(obj).forEach(function (key) {
        if (obj[key] === null) {
            ret[key] = undefined;
        }
        else if (obj[key] instanceof Array) {
            ret[key] = obj[key].map(function (item) {
                return nullToUndefined(item);
            });
        }
        else if (obj[key] instanceof Object) {
            ret[key] = nullToUndefined(obj[key]);
        }
        else {
            ret[key] = obj[key];
        }
    });
    return ret;
}
function clean(objectToClean, _a) {
    if (objectToClean === void 0) { objectToClean = {}; }
    var _b = _a === void 0 ? { recursive: false } : _a, recursive = _b.recursive;
    var mustClean = function (key) { return (recursive && (objectToClean[key] instanceof Object)); };
    var newObject = {};
    Object.keys(objectToClean)
        .forEach(function (key) {
        if (objectToClean[key] !== undefined) {
            newObject[key] = mustClean(key) ? clean(objectToClean[key], { recursive: recursive }) : objectToClean[key];
        }
    });
    return newObject;
}
function reject(raw, rejected) {
    return Object.keys(raw)
        .filter(function (key) { return !rejected.includes(key); })
        .reduce(function (obj, key) {
        obj[key] = raw[key];
        return obj;
    }, {});
}
function isEmpty(obj) {
    return (Object.keys(obj).length == 0);
}
function any(obj) {
    return !!(Object.keys(obj).length > 0);
}
function only(raw, allowed) {
    if (!Array.isArray(allowed))
        allowed = [allowed];
    return Object.keys(raw)
        .filter(function (key) { return allowed.includes(key); })
        .reduce(function (obj, key) {
        obj[key] = raw[key];
        return obj;
    }, {});
}
function present(obj, keys) {
    if (!Array.isArray(keys))
        keys = [keys];
    return keys.every(function (item) { return Object.prototype.hasOwnProperty.call(obj, item); });
}
function every(obj, callback) {
    return Object.keys(obj).every(function (key) { return callback(obj[key], key); });
}
module.exports = {
    any: any,
    clean: clean,
    every: every,
    isEmpty: isEmpty,
    nullToUndefined: nullToUndefined,
    only: only,
    present: present,
    reject: reject,
};
