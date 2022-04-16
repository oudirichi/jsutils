"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eventable_1 = __importDefault(require("./eventable"));
function event() {
    return new eventable_1.default();
}
exports.default = event;
