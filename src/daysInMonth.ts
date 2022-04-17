function daysInMonth(date: Date): number {
  const year = date.getFullYear();
  const month = date.getMonth();

  return new Date(year, month, 0).getDate();
}

export = daysInMonth;
