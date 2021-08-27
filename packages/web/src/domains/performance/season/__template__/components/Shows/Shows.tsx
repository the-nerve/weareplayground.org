import React from 'react';
import { useSingleSeasonContext } from '../../../__context__';

export const Shows = () => {
    const { currentSeason } = useSingleSeasonContext();

    return currentSeason?.shows?.map((show) => {
        return <>{show.title}</>;
    });
};
