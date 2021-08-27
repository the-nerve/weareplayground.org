import { parseISO, sub, isPast, isWithinInterval, isValid } from 'date-fns';
import { ShowStatus } from '../types';

enum STATUS {
    ACTIVE = 'active',
    FUTURE = 'future',
    PAST = 'archived',
    COMING_SOON = 'coming-soon',
    DEFAULT = 'unknown',
}

const now = new Date();

/**
 * Determine if the show is in the past
 *
 * @param lastPerformance The date of the first performance
 * @returns
 */
export const isPastShow = (lastPerformance: Date) => {
    return isPast(lastPerformance);
};

/**
 * Determine if the show is active, meaning it is currently running ("now playing")
 */
export const isActiveShow = (firstPerformance: Date, lastPerformance: Date) => {
    const interval = {
        start: firstPerformance,
        end: lastPerformance,
    };
    return isWithinInterval(now, interval);
};

/**
 * Determine if the show is "coming soon" meaning it will be opening soon
 */
export const isComingSoonShow = (
    firstPerformance: Date,
    lastPerformance: Date
) => {
    // How many days before a show opens should we consider a show "upcoming"?
    const COMING_SOON_WINDOW_DAYS = 30;
    // How many hours before a show officially opens should we still consider it "opcoming"?
    const COMING_SOON_CUTOFF_HOURS = 1;

    const interval = {
        start: sub(firstPerformance, {
            days: COMING_SOON_WINDOW_DAYS,
        }),
        end: sub(lastPerformance, { hours: COMING_SOON_CUTOFF_HOURS }),
    };

    return isWithinInterval(now, interval);
};

/**
 * Determine the status of a show using the open and close dates
 *
 * @param openDate The opening performance datetime
 * @param closeDate The closing performance datetime
 */
export const getShowStatus = (
    openDate?: string,
    closeDate?: string
): ShowStatus => {
    // If no performances are passed in, bail.
    if (!openDate || !closeDate) {
        return STATUS.DEFAULT;
    }

    // Format the open & closing date string as Date objects
    const firstPerformance = parseISO(openDate);
    const lastPerformance = parseISO(closeDate);

    // Check to see if our parsed Date objects are valid
    if (!isValid(firstPerformance) || !isValid(lastPerformance)) {
        return STATUS.DEFAULT;
    }

    if (isPastShow(lastPerformance)) return STATUS.PAST;
    if (isActiveShow(firstPerformance, lastPerformance)) return STATUS.ACTIVE;
    if (isComingSoonShow(firstPerformance, lastPerformance))
        return STATUS.COMING_SOON;

    return STATUS.FUTURE;
};

// TODO: Determine how to implement some of the following

// consumer facing status language??
const prettyStatuses = {
    [STATUS.PAST]: 'Archived',
    [STATUS.ACTIVE]: 'Now Playing',
    [STATUS.COMING_SOON]: 'Coming Soon',
    [STATUS.FUTURE]: 'Future',
    [STATUS.DEFAULT]: 'TBD',
};
