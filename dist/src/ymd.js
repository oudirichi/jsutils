"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ymd(datetime = new Date()) {
    var year = datetime.getFullYear();
    var month = (datetime.getMonth() + 1).toString().padStart(2, '0');
    var date = (datetime.getDate()).toString().padStart(2, '0');
    return [year, month, date].join('');
}
exports.default = ymd;
