import React from 'react';
import styled, { css } from 'styled-components';
import { spacing, AvailableComponentSpacing } from '@web/ui/tokens';

// TYPES
export interface CardContentProps {
    verticalSpacing?: AvailableComponentSpacing;
    disableSpacing?: true;
    className?: string;
}

// STYLES
export const StyledCardContent = styled.div<CardContentProps>`
    --card-content-y-gutter: var(--card-spacing);
    --card-content-x-gutter: var(--card-spacing);

    ${({ verticalSpacing }) =>
        verticalSpacing &&
        css`
            --card-content-y-gutter: ${spacing.component[verticalSpacing!]};
        `};

    ${({ disableSpacing }) =>
        !disableSpacing &&
        css`
            padding: var(--card-content-y-gutter) var(--card-content-x-gutter);
        `};
`;

// COMPONENT DEFINITION
export const CardContent: React.FC<CardContentProps> = ({
    verticalSpacing = 'l',
    disableSpacing,
    className,
    children,
}) => (
    <StyledCardContent
        verticalSpacing={verticalSpacing}
        disableSpacing={disableSpacing}
        className={className}
    >
        {children}
    </StyledCardContent>
);
