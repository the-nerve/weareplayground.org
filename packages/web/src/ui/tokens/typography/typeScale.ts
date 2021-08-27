/**
 * Design Token » Font Sizes
 *
 * The core ideas in this file are pulled from a system called Ether by the talented
 * folks over at The Scenery.
 *
 * https://github.com/wearethescenery/ether-system-react/blob/master/src/base/typography/fontSizes.js
 *
 * Note that the linked file is modified in our implementation to suit preference.
 *
 * @since 1.0.0
 */

import { css, FlattenSimpleInterpolation } from 'styled-components';
import { breakpoints } from '../breakpoints';

/**
 * The base font size for our entire project is set here.
 * This value will ultimately get set on the body in pixels.
 *
 * Changing this value will change all font size accordingly.
 *
 * @since 1.0.0
 */
export const appBaseFontSize = 17;

/**
 * These typographic scale values control typography sizing
 * across the entire site.
 *
 * Scale ratios are pulled from https://type-scale.com/.
 *
 * @since 1.0.0
 */
const largeScalar = 1.333; // Perfect Fourth
const smallScalar = 1.2; // Minor Third

/**
 * Our typographic scale drives the mathematical relationship between all of our font sizes.
 * We are generating values for 2 scales using a large and a small scalar value (defined above).
 *
 * Note that it is possible that not all of these scales steps will be used.
 */
const typeScale: TypeScale = {
    step0: {
        large: 1 / largeScalar,
        small: 1 / smallScalar,
    },
    /* Base size = 1rem */
    step1: {
        small: 1,
        large: 1,
    },
    step2: {
        small: smallScalar,
        large: largeScalar,
    },
    step3: {
        small: smallScalar ** 2,
        large: largeScalar ** 2,
    },
    step4: {
        small: smallScalar ** 3,
        large: largeScalar ** 3,
    },
    step5: {
        small: smallScalar ** 4,
        large: largeScalar ** 4,
    },
    step6: {
        small: smallScalar ** 5,
        large: largeScalar ** 5,
    },
    step7: {
        small: smallScalar ** 6,
        large: largeScalar ** 6,
    },
    step8: {
        small: smallScalar ** 7,
        large: largeScalar ** 7,
    },
};

/**
 * Easily handle generating responsive font sizes using our type scale (above).
 * * Note that we are always using REM values, never EMs or pixels
 *
 * @param {string} scaleSize the size to fetch from the typeScale
 * @param {bool} skipSmall skip the smaller font sie and use the larger font size across all devices
 */
const generateFontSizings = (
    scaleSize: ScaleSize,
    skipSmall?: boolean
): FlattenSimpleInterpolation => {
    // Skip small scalar size output and output only the large scalar size
    if (skipSmall) {
        return css`
            font-size: ${scaleSize.large}rem;
        `;
    }

    // Output large and small scalar font sizings across a defined breakpoint
    return css`
        font-size: ${scaleSize.small}rem;
        ${breakpoints.m} {
            font-size: ${scaleSize.large}rem;
        }
    `;
};

/**
 * Generate final font sizings for consumption by components in our app.
 */
export const fontSizes = {
    'size-1': css`
        font-size: 0.75rem;
    `,
    /**
     * Approx 14px for size0 -  We are stepping outside of the scale here with a custom size.
     * It looks better! We are also skipping the small scalar size.
     */
    size0: css`
        font-size: 0.875rem;
    `,
    size1: generateFontSizings(
        typeScale.step1,
        true
    ) /* Skip small scalar size */,
    size2: generateFontSizings(
        typeScale.step2,
        true
    ) /* Skip small scalar size */,
    size3: generateFontSizings(typeScale.step3),
    size4: generateFontSizings(typeScale.step4),
    size5: generateFontSizings(typeScale.step5),
    size6: generateFontSizings(typeScale.step6),
    size7: generateFontSizings(typeScale.step7),
    size8: generateFontSizings(typeScale.step8),
};

interface ScaleSize {
    small: number;
    large: number;
}

interface TypeScale {
    [key: string]: ScaleSize;
}

// The final sizings of fonts available in our App
export type FontSizes = typeof fontSizes;
export type AvailableFontSize = keyof FontSizes;
