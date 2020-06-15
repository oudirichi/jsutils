"use strict";

function daysInMonth(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  return new Date(year, month, 0).getDate();
}

function pad(n) {
  return n < 10 ? '0' + n : n;
}

function fullDate(date) {
  return {
    year: date.getFullYear(),
    month: pad(date.getMonth() + 1),
    day: pad(date.getDate()),
    hours: pad(date.getHours()),
    minutes: pad(date.getMinutes()),
    seconds: pad(date.getSeconds()),
    daysInMonth: daysInMonth(date)
  };
}

function unixTimestamp(date = new Date()) {
  return +date;
}

function currentTimestamp() {
  const today = new Date();

  const _fullDate = fullDate(today),
        year = _fullDate.year,
        month = _fullDate.month,
        day = _fullDate.day,
        hours = _fullDate.hours,
        minutes = _fullDate.minutes,
        seconds = _fullDate.seconds;

  var date = `${year}${month}${day}`;
  var time = `${hours}${minutes}${seconds}`;
  return date + time;
}

module.exports = {
  pad,
  currentTimestamp,
  unixTimestamp,
  daysInMonth
};