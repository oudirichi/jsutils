"use strict";
function flatten() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (acc, item) {
        if (Array.isArray(item)) {
            acc.concat(flatten.apply(void 0, item));
        }
        else {
            acc.push(item);
        }
        return acc;
    }, []);
}
module.exports = flatten;
