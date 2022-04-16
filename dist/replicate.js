"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const safeAdd_1 = __importDefault(require("./safeAdd"));
function replicate(collection, keys, item) {
    return keys.reduce((acc, keyItem) => {
        collection.forEach((currentRef) => {
            acc.push((0, safeAdd_1.default)(currentRef, keyItem, item));
        });
        return acc;
    }, []);
}
exports.default = replicate;
