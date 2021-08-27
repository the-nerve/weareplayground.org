import React from 'react';
import { useSingleSeasonContext } from '../../../__context__';

export const NeighboringSeasons = () => {
    const { previousSeason, nextSeason } = useSingleSeasonContext();

    return (
        <>
            {previousSeason?.title}
            {nextSeason?.title}
        </>
    );
};
