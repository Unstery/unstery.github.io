export const calculateMonthDiff = (startDate: Date, endDate: Date) => {
  let months;
  months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
  months -= startDate.getMonth();
  months += endDate.getMonth();
  return months <= 0 ? 0 : months;
};

export const formatDate = (
  i18n: any
) => (
  date: Date,
  options: Intl.DateTimeFormatOptions
) => new Intl.DateTimeFormat(i18n.language, options).format(date);
