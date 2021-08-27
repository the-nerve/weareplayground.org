import styled, { css } from 'styled-components';
import { breakpoints } from '@web/ui/tokens';
import { LogoProps, AvailableLogoSizes } from './__types';

const logoWidth: AvailableLogoSizes = {
    xxl: '300px',
    xl: '225px',
    l: '140px',
    m: '100px',
    s: '75px',
    xs: '50px',
};

/**
 * Get the requested logo size,  Also handles responsive sizes if a
 * responsive size configuration is present.
 *
 * @param size
 * @param responsive
 */
const getLogoSize = (
    size: LogoProps['size'],
    responsive: LogoProps['responsive']
) => {
    if (responsive) {
        return css`
            width: ${logoWidth[responsive.size]};
            ${breakpoints[responsive.breakpoint]} {
                width: ${logoWidth[size]};
            }
        `;
    }
    return css`
        width: ${logoWidth[size]};
    `;
};

export const Logo = styled.i<LogoProps>`
    display: inline-flex;
    height: auto;
    line-height: 0;

    svg {
        height: 100%;
        ${({ responsive, size }) => getLogoSize(size, responsive)};
    }

    .bracket {
        fill: ${({ theme, color }) =>
            color ? theme.logo[color].bracketColor : ''};
    }

    .text {
        fill: ${({ theme, color }) =>
            color ? theme.logo[color].textColor : ''};
    }
`;
