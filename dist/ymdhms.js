"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var ymd_1 = __importDefault(require("./ymd"));
module.exports = function ymdhms(datetime) {
    if (datetime === void 0) { datetime = new Date(); }
    var hour = datetime.getHours();
    var minute = datetime.getMinutes();
    var second = datetime.getSeconds();
    return (0, ymd_1.default)(datetime) + [hour, minute, second].map(function (e) { return e.toString().padStart(2, '0'); }).join('');
};
