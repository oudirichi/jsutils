"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function indexBy(collection, key) {
    return collection.reduce((acc, object) => {
        acc[object[key]] = object;
        return acc;
    }, {});
}
exports.default = indexBy;
