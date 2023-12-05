import dateFormat from "dateformat";

export const CurrencyFormatter = (amount) =>
  new Intl.NumberFormat("NGN", {
    style: "currency",
    currency: "NGN",
  }).format(amount || 0);

export const DateFormatter = (date, format) => {
  return dateFormat(date, format);
};
