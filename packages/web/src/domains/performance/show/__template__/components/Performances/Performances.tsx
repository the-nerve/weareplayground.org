import React from 'react';

import { ShowPerformance } from '@web/domains/performance/show';
import { Heading, BodyText, Container } from '@web/ui/core';
import { getRemainingPerformanceCount } from '../../../__lib__';

import * as styled from './Performances.styles';
import { TicketTile } from './TicketTile/TicketTile';

export const Performances: React.FC<PerformancesProps> = ({ performances }) => {
    const remainingPerformances = getRemainingPerformanceCount(performances);

    const chancesText = remainingPerformances === 1 ? 'chance' : 'chances';

    const performancesTitleText = remainingPerformances
        ? 'Choose from available showtimes'
        : 'No available showtimes';

    const performanceSubtitleText = remainingPerformances ? (
        <>
            <span aria-hidden="true">[ </span>You have{' '}
            <strong>{remainingPerformances}</strong> more {chancesText} to catch
            the show<span aria-hidden="true"> ]</span>
        </>
    ) : (
        `This one is in the books. You missed your chance to see it :/`
    );

    return (
        <styled.Performances
            performancesCount={performances.length}
            bgColor="paperDark"
        >
            <Container>
                <div className="lead-in">
                    <Heading
                        size="xs"
                        color="light"
                        className="heading"
                        as="h2"
                    >
                        {performancesTitleText}
                    </Heading>
                    <BodyText size="s" color="medium" className="remaining">
                        {performanceSubtitleText}
                    </BodyText>
                </div>
                <ul className="performances-list">
                    {performances.map((performance) => {
                        return (
                            <TicketTile
                                {...performance}
                                key={performance.datetime}
                            />
                        );
                    })}
                </ul>
            </Container>
        </styled.Performances>
    );
};

export interface PerformancesProps {
    performances: ShowPerformance[];
}
