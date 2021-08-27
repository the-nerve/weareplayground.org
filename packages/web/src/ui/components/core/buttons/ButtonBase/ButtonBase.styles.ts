import styled, { css } from 'styled-components';
import { Link } from '@web/domains/app/routing';

import { animation, borders, spacing, typography } from '@web/ui/tokens';
import { ButtonBaseProps } from './ButtonBase.d';

/**
 * Define button size styles at each available button size
 *
 * @since 1.0.0
 */
export const buttonSizes = {
    s: css`
        /* Custom padding values make button fine-tuning and readability easier -- don't make a habit of this. */
        padding: 5px 12px 5px 12px;
        ${typography.bodyBold.s};
    `,
    m: css`
        /* Custom padding values make button fine-tuning and readability easier -- don't make a habit of this. */
        padding: 11px 16px 12px 16px;
        ${typography.bodyBold.m};
    `,
};

/**
 * Define the amount of scaling happens when an affected button is clicked
 */
const buttonClickScaleAmount = 0.96;

/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains core styling. sizing, & hover logic
 */
export const ButtonBase = styled(Link)<ButtonBaseProps>`
    border-radius: ${borders.defaultRadius};
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    overflow: hidden;
    transition: ${animation.buttonHover};
    width: auto;
    ${(props) => buttonSizes[props.size]}

    > ._content {
        align-items: center;
        display: inline-flex;
        justify-content: center;

        .start-icon,
        .end-icon {
            align-items: center;
            display: inline-flex;
            position: relative;
            transition: ${animation.buttonHover};
        }

        .start-icon {
            margin-right: ${spacing.component.xs};
        }
        .end-icon {
            margin-left: ${spacing.component.xs};
        }

        .loader {
            line-height: 0;
            flex: 1;
        }
    }

    &.--full {
        display: flex;
        width: 100%;
    }

    &.--loading {
        pointer-events: none;
    }

    &:hover {
        &.--icon-hover .start-icon {
            transform: translateX(-3px);
        }

        &.--icon-hover .end-icon {
            transform: translateX(3px);
        }
    }

    &:disabled {
        cursor: not-allowed;
    }

    &:focus {
        outline: none;
    }

    &:active {
        &.--animate-click {
            transform: scale(${buttonClickScaleAmount});
        }
    }
`;
