import React from 'react';
import styled from 'styled-components';
import { Icon, BodyText } from '@web/ui/core';
import { spacing } from '@web/ui/tokens';

import { ShowPerformance } from '../../../../types';
import {
    isGeneralAdmissionPerformance,
    isPreviewPerformance,
    hasTalkbackAfterPerformance,
    isPWYWPerformance,
} from '../../../../__lib__';

const performanceFeatures = [
    {
        condition: isGeneralAdmissionPerformance,
        message: 'General admission',
        icon: <Icon name="Ticket" color="highlightExtra" size="xs" />,
    },

    {
        condition: isPWYWPerformance,
        message: 'Pay What You Want',
        icon: <Icon name="MoneyComment" color="highlightExtra" size="xs" />,
    },
    {
        condition: hasTalkbackAfterPerformance,
        message: 'Talkback after show',
        icon: <Icon name="Conversation" size="xs" color="highlightExtra" />,
    },
    {
        condition: isPreviewPerformance,
        message: 'Preview performance',
        icon: <Icon name="Eye" size="xs" color="highlightExtra" />,
    },
];

const getAvailableFeatures = (performance: ShowPerformance) => {
    return performanceFeatures.filter(({ condition }) =>
        condition(performance)
    );
};

const StyledFeatures = styled.div`
    margin-top: ${spacing.component.s};

    > .feature {
        align-items: center;
        display: flex;
    }

    > .feature > svg {
        margin-right: ${spacing.component.xs};
    }

    > .feature:not(:last-child) {
        margin-bottom: ${spacing.component.xxs};
    }
`;

export const PerformanceFeatures = (performance: ShowPerformance) => {
    const features = getAvailableFeatures(performance);

    return features.length > 0 ? (
        <StyledFeatures>
            {features.map(({ message, icon }) => (
                <div className="feature" key={message}>
                    {icon}
                    <BodyText size="xs" color="medium">
                        {message}
                    </BodyText>
                </div>
            ))}
        </StyledFeatures>
    ) : (
        <></>
    );
};
