import React from 'react';
import styled from 'styled-components';

export const StyledListItemAction = styled.li`
    align-items: center;
    display: flex;

    > a,
    > button,
    > div {
        align-items: center;
        display: flex;
        width: 100%;
        overflow: hidden;
        padding: var(--list-item-spacing) var(--list-gutter);
    }

    svg {
        margin-right: var(--list-item-icon-spacing);
    }

    a:hover,
    button:hover {
        background-color: ${({ theme }) =>
            theme.actions.tertiary.background.hover};
    }
`;

export const ListItemAction: React.FC<ListItemActionProps> = ({
    className,
    children,
}) => {
    return (
        <StyledListItemAction className={className}>
            {children}
        </StyledListItemAction>
    );
};

export interface ListItemActionProps {
    className?: string;
}
