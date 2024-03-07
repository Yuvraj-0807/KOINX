import { format, parseISO } from 'date-fns';

export const formatDate = (value) => {
  if (value) {
    return format(parseISO(value), 'MMM dd, yyyy');
  }
  return value;
};
