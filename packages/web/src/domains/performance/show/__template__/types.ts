import {
    GatsbyPageContext,
    SanityDocument,
    SanityImageData,
    SanityImageDataWithAlt,
} from '@web/shared/types';
import { SeasonReference } from '@web/domains/performance/season';
import { Series } from '@web/domains/performance/series';
import { Location } from '@web/domains/performance/location';

import { ShowAuthor, ShowPerformance, ShowRating, ShowDetail } from '../types';

/**
 * Types for our Single Show Page Template
 */

export interface ShowPageProps extends SanityDocument {
    author: ShowAuthor;
    heroImage: SanityImageData;
    thumbnailImage: SanityImageDataWithAlt;
    performances: ShowPerformance[];
    season: SeasonReference;
    series: Series;
    location: Location;
    _rawDescription: any[];
    openDate: string;
    closeDate: string;
    runtimeHours: number;
    runtimeMinutes: number;
    intermissionCount: number;
    rating: ShowRating;
    triggerWarning?: string;
    contentAdvisory?: ShowDetail;
    effectsAdvisory?: ShowDetail;
}

export interface ShowPageGatsbyContext extends GatsbyPageContext {
    seasonID: string;
    seasonSlug: string;
    seasonURL: string;
}
