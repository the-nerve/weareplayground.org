/**
 * Design Tokens » Typography » Typography
 *
 * Pulls together our fonts and font size tokens into an easy to implement
 * set of style definitions that drive all the typographic styles across the site.
 *
 * @uses fonts to pull in the desired fonts for each definition
 * @uses fontSizes to implement our type scale
 * @since 1.0.0
 */

import { css } from 'styled-components';

import { fonts } from './fonts';
import { fontSizes } from './typeScale';

export const typography = {
    // BodyText
    bodyText: {
        xl: css`
            ${fonts.bodyText};
            ${fontSizes.size3};
            line-height: 1.6;
        `,
        l: css`
            ${fonts.bodyText};
            ${fontSizes.size2};
            line-height: 1.6;
        `,
        m: css`
            ${fonts.bodyText};
            ${fontSizes.size1};
            line-height: 1.7;
        `,
        s: css`
            ${fonts.bodyText};
            ${fontSizes.size0};
            line-height: 1.6;
        `,
        xs: css`
            ${fonts.bodyText};
            ${fontSizes['size-1']};
            line-height: 1.4;
        `,
    },

    // Body » Bold
    bodyBold: {
        xl: css`
            ${fonts.bodyBold};
            ${fontSizes.size3};
            line-height: 1.2;
        `,
        l: css`
            ${fonts.bodyBold};
            ${fontSizes.size2};
            line-height: 1.3;
        `,
        m: css`
            ${fonts.bodyBold};
            ${fontSizes.size1};
            line-height: 1.3;
        `,
        s: css`
            ${fonts.bodyBold};
            ${fontSizes.size0};
            line-height: 1.4;
        `,
        xs: css`
            ${fonts.bodyBold};
            ${fontSizes['size-1']};
            line-height: 1.4;
        `,
    },

    // Heading » Standard
    heading: {
        xl: css`
            ${fonts.heading};
            ${fontSizes.size8};
            line-height: 1.1;
        `,
        l: css`
            ${fonts.heading};
            ${fontSizes.size7};
            line-height: 1.1;
        `,
        m: css`
            ${fonts.heading};
            ${fontSizes.size6};
            line-height: 1.1;
        `,
        s: css`
            ${fonts.heading};
            ${fontSizes.size5};
            line-height: 1.15;
        `,
        xs: css`
            ${fonts.heading};
            ${fontSizes.size3};
            line-height: 1.2;
        `,
    },
};

export type BodyTypography = typeof typography['bodyText'];
export type AvailableBodyTypography = keyof BodyTypography;

export type HeadingTypography = typeof typography['heading'];
export type AvailableHeadingTypography = keyof HeadingTypography;

export type Typography = typeof typography;
export type AvailableTypography = keyof Typography;
