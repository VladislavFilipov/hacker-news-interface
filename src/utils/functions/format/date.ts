const getDateMonthString = (date: Date) =>
  date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;

export const formatUnixDate = (dateNumber: number | Date, separator = ".") => {
  const date = new Date(dateNumber);
  return `${
    date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
  }${separator}${getDateMonthString(date)}${separator}${date.getFullYear()}`;
};

export const formatUnixDateToTime = (dateNumber: number | Date) => {
  const date = new Date(dateNumber);
  return (
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) +
    ":" +
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())
  );
};

export const formatUnixDateWithTime = (dateNumber: number | Date) => {
  const date = new Date(dateNumber);
  return `${formatUnixDate(date)} ${formatUnixDateToTime(date)}`;
};
