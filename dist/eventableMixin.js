"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = __importDefault(require("./event"));
const eventableMixin = (superclass) => class extends superclass {
    constructor(...args) {
        super(...args);
        const innerEvent = (0, event_1.default)();
        Object.entries(innerEvent).forEach(([k, fn]) => {
            this[k] = fn;
        });
    }
};
exports.default = eventableMixin;
