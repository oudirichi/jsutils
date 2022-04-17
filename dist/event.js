"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var eventable_1 = __importDefault(require("./eventable"));
module.exports = function event() {
    return new eventable_1.default();
};
