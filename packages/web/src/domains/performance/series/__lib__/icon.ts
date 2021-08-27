import { AvailableIconName } from '@web/ui/core';
import { AvailableSeries } from '../types';
import { SERIES_ID } from '../constants';

const seriesIconMap: Record<AvailableSeries, AvailableIconName> = {
    [SERIES_ID.NERVE]: 'Fire',
    [SERIES_ID.CO_ACT]: 'Handshake',
    [SERIES_ID.ALTER_EGO]: 'Brain',
};

export const getSeriesIconName = (
    seriesID: AvailableSeries
): AvailableIconName => {
    return seriesIconMap[seriesID];
};
