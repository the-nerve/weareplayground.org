import React from 'react';
import styled, { css } from 'styled-components';
import { spacing, AvailableComponentSpacing } from '@web/ui/tokens';

// TYPES
export interface CardActionsProps {
    disableSpacing?: true;
    itemSpacing?: AvailableComponentSpacing;
    className?: string;
}

// STYLES
export const StyledCardActions = styled.div<CardActionsProps>`
    align-items: center;
    display: flex;
    ${({ disableSpacing }) =>
        !disableSpacing &&
        css`
            padding: var(--card-spacing);
        `}

    > :not(:first-child) {
        margin-left: ${({ itemSpacing }) => spacing.component[itemSpacing!]};
    }
`;

// COMPONENT DEFINITION
export const CardActions: React.FC<CardActionsProps> = ({
    disableSpacing,
    itemSpacing = 'm',
    className,
    children,
}) => (
    <StyledCardActions
        itemSpacing={itemSpacing}
        disableSpacing={disableSpacing}
        className={className}
    >
        {children}
    </StyledCardActions>
);
