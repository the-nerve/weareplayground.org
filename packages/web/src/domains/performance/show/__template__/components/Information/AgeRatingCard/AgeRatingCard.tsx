import React from 'react';
import { BodyText, Icon } from '@web/ui/core';

import { ShowRating } from '../../../../types';
import * as styled from './AgeRatingCard.styles';

export const AgeRatingCard = ({ rating, className }: RuntimeCardProps) => {
    return (
        <styled.AgeRatingCard label="rating">
            <div />
        </styled.AgeRatingCard>
    );
};

interface RuntimeCardProps {
    className?: string;
    rating: ShowRating;
}
