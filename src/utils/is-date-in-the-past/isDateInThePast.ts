export const isDateInThePast = (date: string) =>
  date && new Date(date).getTime() <= new Date().getTime();
