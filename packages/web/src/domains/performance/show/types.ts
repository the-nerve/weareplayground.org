import { SanityImageDataWithAlt } from '@web/shared/types';
import { SeasonReference } from '@web/domains/performance/season';

/**
 * Core data for a show that we may want to use for any component
 */
export interface ShowCore {
    title: string;
    slug: {
        current: string;
    };
    season: SeasonReference;
    author: ShowAuthor;
    openDate: string;
    closeDate: string;
    // In some instances, we will want the full path to the show to be available so we can easily allow navigation directly to it
    path?: string;
    status?: ShowStatus;
}

export interface ShowPosterImage {
    posterImage: SanityImageDataWithAlt;
}
export interface ShowCardImage {
    cardImage: SanityImageDataWithAlt;
}

export interface ShowThumbnailImage {
    thumbnailImage: SanityImageDataWithAlt;
}

export type ShowCoreWithPoster = ShowCore & ShowPosterImage;
export type ShowCoreWithCard = ShowCore & ShowCardImage;
export type ShowCoreWithThumbnail = ShowCore & ShowThumbnailImage;
export type ShowCoreWithImages = ShowCore &
    ShowCardImage &
    ShowPosterImage &
    ShowThumbnailImage;

/**
 * Metadata associated with a show.
 */
export interface ShowAuthor {
    name: string;
    bioLink?: string;
    scriptLink?: string;
}

export type ShowTicketType = 'external' | 'internal' | 'door';

export interface ShowTickets {
    type: ShowTicketType;
    externalLink?: string;
    price?: number;
}

export interface ShowPerformance {
    datetime: string;
    status: 'active' | 'cancelled' | 'sold-out';
    isPreview: boolean;
    isPWYW: boolean;
    hasTalkback: boolean;
    tickets?: ShowTickets;
}

export interface ShowDetail {
    copy: string;
    hasModal: boolean;
    modalTriggerText?: string;
    _rawModalContent?: any[];
}

export type ShowStatus =
    | 'unknown'
    | 'archived'
    | 'active'
    | 'coming-soon'
    | 'future'
    | 'cancelled';

export type ShowRating = 'pg' | 'pg13' | 'r';
