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
