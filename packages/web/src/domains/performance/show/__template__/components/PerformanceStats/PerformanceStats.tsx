import React from 'react';
import { BodyText, Heading, Container, Divider } from '@web/ui/core';

import * as styled from './PerformanceStats.styles';

export const PerformanceStats = ({
    performanceCount,
    className,
}: PerformanceStatsProps) => {
    const items = [
        {
            label: 'Total',
            count: performanceCount.total,
        },
        {
            label: 'Ticketed',
            count: performanceCount.ticketed,
        },
        {
            label: 'PWYW',
            sublabel: '(Pay What You Want)',
            count: performanceCount.pwyw,
        },
    ];

    return (
        <styled.PerformanceStats className={className} bgColor="default">
            <Divider color="paperLight" />
            <Container className="outer-container">
                <BodyText
                    size="s"
                    as="h2"
                    color="medium"
                    className="title"
                    weight="bold"
                >
                    PERFORMANCE STATS
                </BodyText>
                <div className="item-container">
                    {items.map(({ label, sublabel, count }) => (
                        <div className="item" key={label}>
                            <Heading
                                size="m"
                                color="light"
                                className="count"
                                as="h3"
                                textTransform="uppercase"
                            >
                                {count}
                            </Heading>
                            <BodyText
                                size="s"
                                color="medium"
                                as="p"
                                textTransform="uppercase"
                                className="label"
                                weight="bold"
                            >
                                {label}
                            </BodyText>
                            {sublabel && (
                                <BodyText
                                    size="xs"
                                    color="medium"
                                    as="span"
                                    className="count"
                                >
                                    {sublabel}
                                </BodyText>
                            )}
                        </div>
                    ))}
                </div>
            </Container>
            <Divider color="paperLight" />
        </styled.PerformanceStats>
    );
};

interface PerformanceStatsProps {
    performanceCount: {
        total: number;
        ticketed: number;
        pwyw: number;
    };
    className?: string;
}
