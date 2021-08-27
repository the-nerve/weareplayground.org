import { spacing } from '@web/ui/tokens';
import styled from 'styled-components';

import { InfoCard } from '../InfoCard/InfoCard';

export const LocationCard = styled(InfoCard)`
    .header {
        align-items: center;
        display: flex;
        margin-bottom: ${spacing.component.xs};
    }

    .header > svg {
        margin-right: ${spacing.component.xs};
    }

    .address {
        margin-bottom: ${spacing.component.s};
    }
`;
