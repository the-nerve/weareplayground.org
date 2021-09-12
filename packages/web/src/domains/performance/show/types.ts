import { SanityImageDataWithAlt, SanityImageData } from '@web/shared/types';
import { SeasonReference } from '@web/domains/performance/season';
import { Series } from '@web/domains/performance/series';
import {
    SHOW_STATUS,
    SHOW_RATING,
    PERFORMANCE_TICKET_TYPE,
    PERFORMANCE_STATUS,
} from './constants';

/**
 * Metadata associated with a show.
 */
export interface ShowAuthor {
    name: string;
    bioLink?: string;
    scriptLink?: string;
}

export interface ShowTickets {
    type: PERFORMANCE_TICKET_TYPE;
    externalLink?: string;
    price?: number;
}

export interface ShowPerformance {
    datetime: string;
    status: PERFORMANCE_STATUS;
    isPreview: boolean;
    isPWYW: boolean;
    hasTalkback: boolean;
    tickets?: ShowTickets;
}

export interface ShowDetail {
    copy?: string;
    hasModal?: boolean;
    modalTriggerText?: string;
    _rawModalContent?: any[];
}

export interface ShowNotice {
    shouldDisplay: boolean;
    title: string;
    _rawContent: any[];
}

/**
 * Core show structure
 */
export interface Show {
    title: string;
    slug: {
        current: string;
    };
    season: SeasonReference;
    author: ShowAuthor;
    openDate: string;
    closeDate: string;
    series?: Series;
    teaser?: string;
    rating?: SHOW_RATING;
    performances?: ShowPerformance[];
    posterImage?: SanityImageDataWithAlt;
    cardImage?: SanityImageDataWithAlt;
    thumbnailImage?: SanityImageDataWithAlt;
    heroImage?: SanityImageData;
    generalTicketLink?: string;
    healthNotice?: ShowNotice;
    // In some instances, we will want the full path to the show to be available so we can easily allow navigation directly to it
    path?: string;
    status?: SHOW_STATUS;
    number?: number;
}

/**
 * In some instances we will decorate shows with additional data
 * TODO: Remove references of these types in the core Show interface
 */
export interface DecoratedShow extends Show {
    path?: string;
    status?: SHOW_STATUS;
    number?: number;
}
