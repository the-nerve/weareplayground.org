import { spacing } from '@web/ui/tokens';
import styled from 'styled-components';

import { InfoCard } from '../InfoCard/InfoCard';

export const DatesCard = styled(InfoCard)`
    .dates > .through {
        position: relative;
        top: -1px;
    }
`;
