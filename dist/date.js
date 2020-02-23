function daysInMonth({
  year,
  month = month + 1
} = {}) {
  return new Date(year, month, 0).getDate();
}

function daysInMonthFromDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  return daysInMonth({
    year,
    month
  });
}

function fullDate(date) {
  const twoDegit = degit => degit < 10 ? "0" + degit : degit;

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
  const today = new Date();
  const {
    year,
    month,
    day,
    hours,
    minutes,
    seconds
  } = fullDate(today);
  var date = `${year}${month}${day}`;
  var time = `${hours}${minutes}${seconds}`;
  return date + time;
}

module.exports = {
  timestamp,
  daysInMonth,
  daysInMonthFromDate
};