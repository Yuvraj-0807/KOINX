import { format, parseISO } from 'date-fns';

export const formatDate = (value) => {
  if (value) {
    return format(parseISO(value), 'MMM dd, yyyy');
  }
  return value;
};

export const stringsToObjects = (arr) =>
  arr.map((ar) => {
    if (typeof ar !== 'string') {
      return { ...ar };
    } else {
      return { label: ar, value: ar };
    }
  });

export const formatLargeNumber = (number) => {
  const abbreviations = ['', 'K', 'M', 'B', 'T'];

  let suffixIndex = 0;
  while (number >= 1000 && suffixIndex < abbreviations.length - 1) {
    number /= 1000;
    suffixIndex++;
  }

  return number.toFixed(1) + abbreviations[suffixIndex];
};

export const formatCurrency = (amount, fractionalDigit = 0) => {
  const formatting_options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: fractionalDigit,
  };
  const dollarString = new Intl.NumberFormat('en-US', formatting_options);
  if (!amount) {
    return dollarString.format(0);
  }
  return dollarString.format(amount);
};
