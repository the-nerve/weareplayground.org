import styled from 'styled-components';
import { breakpoints, spacing } from '@web/ui/tokens';
import { Section } from '@web/ui/core';

const breakpoint = breakpoints.s;

export const PerformanceStats = styled(Section)`
    text-align: center;

    .outer-container {
        padding: ${spacing.layout.s} 0;
        ${breakpoint} {
            padding: ${spacing.component.l} 0;
        }
    }

    .outer-container > .title {
        margin-bottom: ${spacing.component.xl};
        ${breakpoint} {
            margin-bottom: ${spacing.layout.xs};
        }
    }

    .item-container {
        ${breakpoint} {
            align-items: center;
            display: flex;
            justify-content: space-between;
        }
    }

    .item {
        ${breakpoint} {
            display: flex;
            align-self: stretch;
            flex: 1 0 33.33333%;
            flex-direction: column;
        }
    }

    .item:not(:first-child) {
        margin-top: ${spacing.component.l};
        ${breakpoint} {
            border-left: ${({ theme }) =>
                `1px solid ${theme.surfaces.paperLight}`};
            margin-top: 0;
        }
    }

    .item > .label {
        margin-top: ${spacing.component.xxs};
    }
`;
