import styled from 'styled-components';
import { spacing } from '@web/ui/tokens';
import { InfoCard } from '../InfoCard/InfoCard';

export const SeriesInfoCard = styled(InfoCard)`
    max-width: 350px;

    svg {
        margin-bottom: ${spacing.component.xxs};
    }

    > .series-title {
        margin-bottom: ${spacing.component.xxs};
    }
`;
