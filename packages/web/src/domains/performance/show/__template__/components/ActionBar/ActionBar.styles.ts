import styled from 'styled-components';
import { rgba } from 'polished';
import { spacing } from '@web/ui/tokens';

export const ActionBar = styled.div`
    background: ${({ theme }) => rgba(theme.surfaces.paperDark, 0.75)};
    backdrop-filter: blur(5px);
    bottom: 0;
    left: 0;
    padding: ${spacing.component.s} 0;
    position: absolute;
    width: 100%;

    .container {
        align-items: center;
        display: flex;
        justify-content: space-between;
    }
`;
