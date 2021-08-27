import styled from 'styled-components';
import { rgba } from 'polished';

import { animation, appNavBreakpoint, spacing, zIndex } from '@web/ui/tokens';

import { HeaderProps } from './__types';

export const Header = styled.header<HeaderProps>`
    background-color: ${({ theme }) => rgba(theme.surfaces.paperDark, 0.75)};
    backdrop-filter: saturate(180%) blur(5px);
    border-bottom: 1px solid ${({ theme }) => theme.surfaces.paperDark};
    display: block;
    padding: ${spacing.component.s} 0;
    position: relative;
    width: 100%;
    z-index: ${zIndex.nav};

    ${appNavBreakpoint} {
        left: 0;
        padding: ${spacing.component.m} 0;
        position: absolute;
        top: 0;
        width: 100%;
    }

    .container {
        align-items: center;
        display: flex;
        justify-content: space-between;
    }

    .brand {
        display: flex;
        transition: ${animation.linkHover};
    }

    .brand.--is-active {
        pointer-events: none;
    }

    .brand:hover {
        opacity: 0.7;
    }

    [data-nav-scope='desktop'] {
        /* temp disable nav hiding until we build a mobile menu */
        /* display: none; */
        ${appNavBreakpoint} {
            display: initial;
        }
    }
`;
