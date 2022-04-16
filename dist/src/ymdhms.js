"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ymd_1 = __importDefault(require("./ymd"));
function ymdhms(datetime = new Date()) {
    var hour = datetime.getHours();
    var minute = datetime.getMinutes();
    var second = datetime.getSeconds();
    return (0, ymd_1.default)(datetime) + [hour, minute, second].map((e) => e.toString().padStart(2, '0')).join('');
}
exports.default = ymdhms;
