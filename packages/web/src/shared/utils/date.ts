import { parseISO, format, isValid } from 'date-fns';

export const formatDateString = (
    dateString = '',
    formatShape: string,
    fallback?: 'tbd'
) => {
    const date = parseISO(dateString);
    return isValid(date) ? format(date, formatShape) : fallback;
};
