"use strict";
function daysInMonth(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
    return new Date(year, month, 0).getDate();
}
module.exports = daysInMonth;
