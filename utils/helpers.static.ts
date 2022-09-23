export function prettyPrintDate(date_string?: string, must?: boolean) {
  if (!date_string) return "";
  const dt = new Date(date_string);
  if (!dt) return "";
  const seconds = Math.floor(
    (new Date().getUTCMilliseconds() - dt.getUTCMilliseconds()) / 1000
  );
  let interval = seconds / 86400;
  // if more than a week ago print date
  if (interval > 7 || must || seconds < 0) {
    const printedDates = dt.toDateString().split(" ");
    if (printedDates.length > 3)
      return `${printedDates[1]} ${printedDates[2]}, ${printedDates[3]}`;
    return `${printedDates[0]} ${printedDates[1]}, ${printedDates[2]}`;
  }
  if (interval > 1) {
    const days = Math.floor(interval);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }
  interval = seconds / 3600;
  if (interval > 1) {
    const hourse = Math.floor(interval);
    return `${hourse} hour${hourse > 1 ? "s" : ""} ago`;
  }
  interval = seconds / 60;
  if (interval > 1) {
    return `${Math.floor(interval)} minutes ago`;
  }
  return `${Math.floor(seconds)} seconds ago`;
}

export function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// get a number in string divided with commas 200,000
export const getWithCommas = (value: number) => {
  if (value <= 0) return "...";
  return value
    .toFixed(0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
