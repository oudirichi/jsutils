"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function daysInMonth(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 0).getDate();
}
exports.default = daysInMonth;
