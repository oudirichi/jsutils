"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flatten(...args) {
    return args.reduce((acc, item) => {
        if (Array.isArray(item)) {
            acc.concat(flatten(...item));
        }
        else {
            acc.push(item);
        }
        return acc;
    }, []);
}
exports.default = flatten;
