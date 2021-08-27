import React from 'react';
import { parseISO, format } from 'date-fns';
import { BodyText, Card, CardContent, CardActions, Tag } from '@web/ui/core';

import {
    isAvailablePerformance,
    hasTicketTypeDefined,
    hasExternalTicketLink,
    hasExternalTickets,
    hasAvailableTicketOffer,
} from '../../../../__lib__';

import { TICKET_TYPE_MESSAGING } from '../../../../constants';
import { ShowPerformance } from '../../../../types';

import { TicketOffer } from '../TicketOffer/TicketOffer';
import { PerformanceFeatures } from '../PerformanceFeatures/PerformanceFeatures';

import * as styled from './TicketTile.styles';
import { TicketTileProps } from './TicketTile.types';

const TICKET_MESSAGING = {
    UNAVAILABLE: 'Unavailable',
    AVAILABLE_SOON: 'Available Soon',
};

/**
 * Get the appropriate messaging for ticket buttons based on many possible
 * conditions a performance might have
 */
const getTicketButtonMessaging = (performance: ShowPerformance) => {
    const { tickets } = performance;

    // This performance is no longer available
    if (!isAvailablePerformance(performance)) {
        return TICKET_MESSAGING.UNAVAILABLE;
    }

    // Ticket either has no data or ticket types are not properly defined/set up
    if (!tickets || !hasTicketTypeDefined(tickets)) {
        return TICKET_MESSAGING.UNAVAILABLE;
    }

    // External ticket type is defined but no URL to tickets is provided
    if (hasExternalTickets(tickets) && !hasExternalTicketLink(tickets)) {
        return TICKET_MESSAGING.AVAILABLE_SOON;
    }

    // If we made it this far, get our specific "type" messaging
    return TICKET_TYPE_MESSAGING[tickets.type];
};

// Boolean function to determine if we should be displaying ticket buttons or a tag with text
// check for available performance
// check that tickets exist
// check that tickets are defined && external link is provided if external is defined

export const TicketTile = (performance: TicketTileProps) => {
    /**
     * We are destructuring here instead of on the top-level component props because
     * we want to be able to pass around the entire "performance" object for simpler
     * data validation (i.e. not having to pass individual props to different validators,
     * but rather passing in `performance` and letting the validators operate on the data
     * they need.)
     */
    const {
        datetime,
        status,
        isPWYW,
        isPreview,
        hasTalkback,
        tickets,
        ...props
    } = performance;

    const isAvailable = isAvailablePerformance(performance);

    const rawDate = parseISO(datetime);
    const date = format(rawDate, 'iii, MMM dd');
    const curtain = format(rawDate, 'h:mm a');

    const isTicketOfferVisible = hasAvailableTicketOffer(performance);
    const ticketButtonMessage = getTicketButtonMessaging(performance);

    return (
        <styled.TicketTile isAvailable={isAvailable} {...props}>
            <Card
                variant="outlined"
                bgColor="paperDark"
                borderColor="paperLight"
                className="tile"
                spacing={{ desktop: 'm', mobile: 's' }}
            >
                <CardContent verticalSpacing="m">
                    <div
                        className="showtime"
                        aria-label="Performance Date and Time"
                    >
                        <BodyText weight="bold" size="s" color="light">
                            {date}
                        </BodyText>
                        <BodyText color="light" size="s">
                            {curtain}
                        </BodyText>
                    </div>
                    {/* Turning thise off until I can find a way of displaying this data that doesn't ruin layout :/ */}
                    <PerformanceFeatures {...performance} />
                </CardContent>
                <CardActions className="action">
                    {/* // Disabling non-null assertions because the assumption is, if tickets are visible the necessary data has already been checked and it exists */}
                    {tickets && isTicketOfferVisible ? (
                        <TicketOffer
                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                            url={tickets.externalLink!}
                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                            price={tickets.price!}
                            text={ticketButtonMessage}
                        />
                    ) : (
                        <Tag
                            text={ticketButtonMessage}
                            color="medium"
                            bgColor="paper"
                            borderColor="paperLight"
                            size="s"
                            isFullWidth
                        />
                    )}
                </CardActions>
            </Card>
        </styled.TicketTile>
    );
};
