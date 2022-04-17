"use strict";
module.exports = function ymd(datetime) {
    if (datetime === void 0) { datetime = new Date(); }
    var year = datetime.getFullYear();
    var month = (datetime.getMonth() + 1).toString().padStart(2, '0');
    var date = (datetime.getDate()).toString().padStart(2, '0');
    return [year, month, date].join('');
};
