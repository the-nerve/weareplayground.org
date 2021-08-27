import { spacing } from '@web/ui/tokens';
import styled from 'styled-components';

import { InfoCard } from '../InfoCard/InfoCard';

export const RuntimeCard = styled(InfoCard)`
    .runtime {
        align-items: center;
        display: flex;
        margin-bottom: ${spacing.component.xs};
    }

    .runtime > svg {
        margin-right: ${spacing.component.m};
    }

    .intermissions {
    }
`;
