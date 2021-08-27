import styled from 'styled-components';
import { Section } from '@web/ui/core';
import { breakpoints, spacing } from '@web/ui/tokens';

const breakpoint = breakpoints.s;

export const Information = styled(Section)`
    padding: ${spacing.layout.m} 0;

    ${breakpoint} {
        padding: ${spacing.layout.m} 0;
    }

    .section-title {
        text-align: center;
        margin-bottom: ${spacing.layout.s};
    }

    .info-wrapper {
        ${breakpoint} {
            display: grid;
            grid-gap: ${spacing.component.m};
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .performance-info > *,
    .content-info > * {
        margin-bottom: ${spacing.component.l};
        ${breakpoint} {
            margin-bottom: ${spacing.component.xl};
        }
    }
`;
