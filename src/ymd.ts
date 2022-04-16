export default function ymd(datetime = new Date()): string {
  const year = datetime.getFullYear();
  const month = (datetime.getMonth() + 1).toString().padStart(2, '0');
  const date = (datetime.getDate()).toString().padStart(2, '0');

  return [year, month, date].join('');
}
