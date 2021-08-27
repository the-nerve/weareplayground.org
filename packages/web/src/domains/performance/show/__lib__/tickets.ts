import { isEmptyString } from '@web/shared/utils';
import { ShowTickets } from '../types';
import { PERFORMANCE_TICKET_TYPE } from '../constants';

/**
 * A set of functions for working with tickets of an individual performance of a Show.
 */

/**
 * The ticket type has been defined as "door"
 */
export const hasTicketsAtDoor = (tickets?: ShowTickets) => {
    const { type } = tickets || {};
    return type === PERFORMANCE_TICKET_TYPE.DOOR;
};

/**
 * The ticket type has been defined as "internal"
 */
export const hasInternalTickets = (tickets?: ShowTickets) => {
    const { type } = tickets || {};
    return type === PERFORMANCE_TICKET_TYPE.INTERNAL;
};

/**
 * The ticket type has been defined as "external"
 */
export const hasExternalTickets = (tickets?: ShowTickets) => {
    const { type } = tickets || {};
    return type === PERFORMANCE_TICKET_TYPE.EXTERNAL;
};

/**
 * An external ticket link ahs been set
 */
export const hasExternalTicketLink = (tickets?: ShowTickets) => {
    const { externalLink } = tickets || {};
    return !isEmptyString(externalLink);
};

/**
 * Given ticket config has a price set
 * * Even setting to 0 will be valid
 */
export const hasTicketPrice = (tickets?: ShowTickets) => {
    const { price } = tickets || {};
    return price !== undefined && price >= 0;
};

/**
 * External ticket type is set and a URL exists
 */
export const hasValidExternalTickets = (tickets?: ShowTickets) => {
    return hasExternalTickets(tickets) && hasExternalTicketLink(tickets);
};

/**
 * A ticket type is defined (type doesn't matter)
 */
export const hasTicketTypeDefined = (tickets?: ShowTickets) => {
    return (
        hasTicketsAtDoor(tickets) ||
        hasInternalTickets(tickets) ||
        hasExternalTickets(tickets)
    );
};
