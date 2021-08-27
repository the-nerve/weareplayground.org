import React from 'react';
import styled from 'styled-components';
import { BodyText, FillButton } from '@web/ui/core';
import { spacing } from '@web/ui/tokens';

const StyledTicketOffer = styled.div`
    .cost {
        margin-bottom: ${spacing.component.xs};
    }
`;

/**
 * Ticket price grouped with a ticket button
 */
export const TicketOffer = ({ url, price, text }: TicketButtonProps) => {
    return (
        <StyledTicketOffer>
            <BodyText color="medium" size="xs" className="cost">
                ${price}/each
            </BodyText>
            <FillButton to={url} size="s" color="primary" fullWidth>
                {text}
            </FillButton>
        </StyledTicketOffer>
    );
};

interface TicketButtonProps {
    url: string;
    text: string;
    price: number;
}
