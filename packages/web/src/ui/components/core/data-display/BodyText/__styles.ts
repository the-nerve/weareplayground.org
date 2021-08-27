import styled from 'styled-components';
import { typography } from '@web/ui/tokens';
import { BodyTextProps } from './__types';

export const BodyText = styled.p<BodyTextProps>`
    text-transform: ${({ textTransform }) => textTransform};
    color: ${({ color, theme }) =>
        color ? theme.typography[color] : 'inherit'};
    ${({ weight, size }) =>
        weight === 'regular'
            ? typography.bodyText[size]
            : typography.bodyBold[size]};
`;
