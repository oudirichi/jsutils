import ymd from "./ymd";

export = function ymdhms(datetime = new Date()): string {
  const hour = datetime.getHours();
  const minute = datetime.getMinutes();
  const second = datetime.getSeconds();

  return ymd(datetime) + [hour, minute, second].map((e) => e.toString().padStart(2, '0')).join('');
}
