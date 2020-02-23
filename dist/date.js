"use strict";

function daysInMonth() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      year = _ref.year,
      _ref$month = _ref.month,
      month = _ref$month === void 0 ? month + 1 : _ref$month;

  return new Date(year, month, 0).getDate();
}

function daysInMonthFromDate(date) {
  var year = date.getFullYear();
  var month = date.getMonth();
  return daysInMonth({
    year: year,
    month: month
  });
}

function fullDate(date) {
  var twoDegit = function twoDegit(degit) {
    return degit < 10 ? "0" + degit : degit;
  };

  return {
    year: date.getFullYear(),
    month: twoDegit(date.getMonth() + 1),
    day: twoDegit(date.getDate()),
    hours: twoDegit(date.getHours()),
    minutes: twoDegit(date.getMinutes()),
    seconds: twoDegit(date.getSeconds()),
    daysInMonth: daysInMonthFromDate(date)
  };
}

function timestamp() {
  var today = new Date();

  var _fullDate = fullDate(today),
      year = _fullDate.year,
      month = _fullDate.month,
      day = _fullDate.day,
      hours = _fullDate.hours,
      minutes = _fullDate.minutes,
      seconds = _fullDate.seconds;

  var date = "".concat(year).concat(month).concat(day);
  var time = "".concat(hours).concat(minutes).concat(seconds);
  return date + time;
}

module.exports = {
  timestamp: timestamp,
  daysInMonth: daysInMonth,
  daysInMonthFromDate: daysInMonthFromDate
};