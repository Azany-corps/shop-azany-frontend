import dateFormat, { masks } from "dateformat";

export const CurrencyFormatter = (amount) =>
  new Intl.NumberFormat("NGN", {
    style: "currency",
    currency: "NGN",
  }).format(amount || 0);

export const DateFormatter = (date, format) => {
  return dateFormat(date, format);
};

export const handleClick = (id, selected, setSelected) => {
  const selectedIndex = selected.indexOf(id);
  let newSelected = [];

  if (selectedIndex === -1) {
    newSelected = newSelected.concat(selected, id);
  } else if (selectedIndex === 0) {
    newSelected = newSelected.concat(selected.slice(1));
  } else if (selectedIndex === selected.length - 1) {
    newSelected = newSelected.concat(selected.slice(0, -1));
  } else if (selectedIndex > 0) {
    newSelected = newSelected.concat(
      selected.slice(0, selectedIndex),
      selected.slice(selectedIndex + 1)
    );
  }

  setSelected(newSelected);
};

export const isSelected = (name, selected) => selected.indexOf(name) !== -1;
