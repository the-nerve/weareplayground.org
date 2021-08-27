import { isPast, isValid, parseISO } from 'date-fns';
import { ShowPerformance } from '../types';
import {
    hasValidExternalTickets,
    hasInternalTickets,
    hasExternalTickets,
    hasTicketPrice,
} from './tickets';

/**
 * A set of functions for working with individual performances of a Show.
 */

/**
 * Checks to see if this performance has been marked as "cancelled"
 */
export const isCancelledPerformance = (performance: ShowPerformance) => {
    const { status } = performance;
    return status === 'cancelled';
};

export const isSoldOutPerformance = (performance: ShowPerformance) => {
    const { status } = performance;
    return status === 'sold-out';
};

/**
 * Is the starting time of this performance past the current date and time?
 */
export const isPastPerformance = (performance: ShowPerformance) => {
    const { datetime } = performance;
    const date = parseISO(datetime);
    return isValid(date) && isPast(date);
};

/**
 * Is this performance considered to be currently "available" to the public?
 */
export const isAvailablePerformance = (performance: ShowPerformance) => {
    return (
        !isCancelledPerformance(performance) && !isPastPerformance(performance)
    );
};

/**
 * Checks to see if the current performance is a "Pay What You Want" performance
 */
export const isPWYWPerformance = (performance: ShowPerformance) => {
    return performance.isPWYW;
};

/**
 * Checks to see if the current performance has a talkback after the show
 */
export const hasTalkbackAfterPerformance = (performance: ShowPerformance) => {
    return performance.hasTalkback;
};

/**
 * Checks to see if the current performance is a dress preview
 */
export const isPreviewPerformance = (performance: ShowPerformance) => {
    return performance.isPreview;
};

/**
 * Checks to see if the performance is a general admission performance.
 * * Currently any performance other than Pay What You Want
 */
export const isGeneralAdmissionPerformance = (performance: ShowPerformance) => {
    return !performance.isPWYW;
};

/**
 * This performance has some kind of "official" ticketing associated with it (not at the door)
 */
export const isTicketedPerformance = (performance: ShowPerformance) => {
    const { tickets } = performance || {};

    return (
        hasTicketPrice(tickets) &&
        (hasExternalTickets(tickets) || hasInternalTickets(tickets))
    );
};

/**
 * Checks to see if the current performance has an available ticket offer.
 *
 * Checks the following:
 * - The availability of the performance as a whole
 * - Ticket data exists
 * - An explicitly defined ticket price
 * - A valid external ticket url (if type is external)
 * - A ticket type of "internal"
 */
export const hasAvailableTicketOffer = (performance: ShowPerformance) => {
    const { tickets } = performance || {};

    return (
        isAvailablePerformance(performance) &&
        tickets &&
        hasTicketPrice(tickets) &&
        (hasValidExternalTickets(tickets) || hasInternalTickets(tickets))
    );
};

/**
 * Get the total number of performance occurrences for a single show
 */
export const getTotalPerformanceCount = (performances: ShowPerformance[]) => {
    const total = performances.filter(
        (performance) => !isCancelledPerformance(performance)
    );

    return total.length;
};

/**
 * Get total ticketed performance count
 */
export const getTotalTicketedPerformanceCount = (
    performances: ShowPerformance[]
) => {
    const total = performances.filter((performance) =>
        isTicketedPerformance(performance)
    );

    return total.length;
};

/**
 * Get total pay what you want performance count
 */
export const getTotalPWYWPerformanceCount = (
    performances: ShowPerformance[]
) => {
    const total = performances.filter((performance) =>
        isPWYWPerformance(performance)
    );

    return total.length;
};

/**
 * Get the total number of performances still remaining that an audience member
 * could buy a ticket to.
 */
export const getRemainingPerformanceCount = (
    performances: ShowPerformance[]
) => {
    const remaining = performances.filter((performance) =>
        isAvailablePerformance(performance)
    );

    return remaining.length;
};
