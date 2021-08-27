import React from 'react';
import { BodyText, Icon } from '@web/ui/core';

import * as styled from './RuntimeCard.styles';

export const RuntimeCard = ({
    runtime,
    intermissionCount,
    className,
}: RuntimeCardProps) => {
    const hoursText = runtime.hours === 1 ? 'hour' : 'hours';
    const intermissionText =
        intermissionCount === 1 ? 'intermission' : 'intermissions';

    return (
        <styled.RuntimeCard label="runtime">
            <div className="runtime">
                <Icon name="Clock" size="m" color="light" />
                <div>
                    <BodyText color="light" size="m" weight="bold">
                        {runtime.hours} {hoursText}
                    </BodyText>
                    <BodyText color="light" size="m" weight="bold">
                        {runtime.minutes} minutes
                    </BodyText>
                </div>
            </div>
            <div className="intermissions">
                <BodyText size="s" color="medium">
                    {!intermissionCount
                        ? 'No Intermission'
                        : `${intermissionCount} ${intermissionText}`}
                </BodyText>
            </div>
        </styled.RuntimeCard>
    );
};

interface RuntimeCardProps {
    className?: string;
    intermissionCount: number;
    runtime: {
        hours: number;
        minutes: number;
    };
}
