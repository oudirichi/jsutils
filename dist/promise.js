"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPromise = exports.defer = void 0;
const defer_1 = __importDefault(require("./defer"));
exports.defer = defer_1.default;
const isPromise_1 = __importDefault(require("./isPromise"));
exports.isPromise = isPromise_1.default;
