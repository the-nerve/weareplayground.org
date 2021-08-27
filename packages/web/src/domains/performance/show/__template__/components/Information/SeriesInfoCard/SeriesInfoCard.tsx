import React from 'react';
import { Icon, BodyText } from '@web/ui/core';
import { getSeriesIconName, Series } from '@web/domains/performance/series';

import * as styled from './SeriesInfoCard.styles';

export const SeriesInfoCard = ({
    title,
    identifier,
    description,
    className,
}: SeriesInfoCardProps) => {
    return (
        <styled.SeriesInfoCard className={className}>
            <Icon
                name={getSeriesIconName(identifier)}
                size="l"
                color="accent"
            />

            <BodyText
                size="m"
                color="light"
                as="p"
                weight="bold"
                className="series-title"
            >
                Part of our {title} series
            </BodyText>
            <BodyText size="s" color="medium" as="p">
                {description}
            </BodyText>
        </styled.SeriesInfoCard>
    );
};

interface SeriesInfoCardProps extends Series {
    className?: string;
}
