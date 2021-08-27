import React from 'react';

import { IconProps } from './__types';
import * as Styled from './__styles';
import { availableIcons, IconDefinition } from './__manifest__';

/**
 * Outputs SVG Icons and gives us full control over sizing and coloring
 *
 * We use icons from this pack:
 * https://icomoon.io/#icons-icomoon
 */

export const Icon: React.FC<IconProps> = ({
    name,
    color,
    size,
    responsive,
    title,
    desc,
    ...others
}) => {
    const selectedIcon: IconDefinition = availableIcons[name];

    if (!selectedIcon) {
        console.warn(
            `The requested icon "${name}" does not exist. No icon will be rendered.`
        );
        return null;
    }

    return (
        <Styled.Icon
            name={name}
            color={color}
            size={size}
            responsive={responsive}
            title={title}
            desc={desc}
            aria-hidden="true"
            role="presentation"
            path={selectedIcon.path}
            viewBox={selectedIcon.viewBox}
            {...others}
        />
    );
};

export * from './__types';
