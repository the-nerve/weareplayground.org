import React from 'react';
import cx from 'classnames';

import { BodyText } from '@web/ui/core';

import { TagProps } from './Tag.types';
import * as styled from './Tag.styles';

export const Tag = ({
    text,
    media,
    color,
    bgColor,
    borderColor,
    size,
    className,
    isFullWidth,
    ...props
}: TagProps) => {
    const classes = cx(className, { '--full-width': isFullWidth });

    return (
        <styled.Tag
            className={classes}
            size={size}
            color={color}
            bgColor={bgColor}
            borderColor={borderColor}
            {...props}
        >
            {media && <div className="media">{media}</div>}
            <BodyText size={size} color={color}>
                {text}
            </BodyText>
        </styled.Tag>
    );
};
