import styled from 'styled-components';

import { animation } from '@web/ui/tokens';

export const CloseOverlay = styled.button`
    height: 20px;
    right: 28px;
    width: 20px;
    position: absolute;
    top: 18px;
    z-index: 1;

    &:before {
        background-color: ${({ theme }) =>
            theme.actions.tertiary.background.hover};
        border-radius: 50%;
        content: '';
        display: block;
        position: absolute;
        height: 26px;
        width: 26px;
        z-index: -1;
        top: 50%;
        transition: ${animation.buttonHover};
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
    }

    &:hover:before {
        opacity: 1;
    }
`;
