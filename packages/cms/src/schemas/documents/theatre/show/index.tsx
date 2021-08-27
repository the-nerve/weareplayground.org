import React from 'react';
import { Star } from 'react-feather';

import { DocumentCollection } from '../../../../types';
import { bindFieldsToFieldset } from '../../../../lib/fieldset';

import articles from './fields/articles';
import artists from './fields/artists';
import author from './fields/author';
import collaboration from './fields/collaboration';
import details from './fields/details';
import images from './fields/images';
import messaging from './fields/messaging';
import { performances } from './fields/performance';
import promo from './fields/promo';
import season from './fields/season';
import selectors from './fields/selectors';
import sponsors from './fields/sponsors';
import toggles from './fields/toggles';
import series from './fields/series';

import * as showObjects from './objects';

export const schema: DocumentCollection = {
    name: 'show',
    title: 'Shows',
    icon: <Star />,
    fieldsets: [
        {
            name: 'messaging',
            title: 'Messaging',
            description: 'General messaging and descriptions for this show',
            options: { collapsible: true, collapsed: true },
        },
        {
            name: 'details',
            title: 'Performance Details',
            description:
                'Detailed information about this show and its performances',
            options: { collapsible: true, collapsed: true },
        },
        {
            name: 'images',
            title: 'Images',
            description:
                'Images that represent this show in different contexts',
            type: 'object',
            options: { collapsed: true, collapsible: true },
        },
    ],
    fields: [
        {
            name: 'title',
            title: 'Show Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Show Slug',
            type: 'slug',
            options: {
                source: 'title',
                slugify: (input: string): string =>
                    input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
            },
            validation: (Rule: any) => Rule.required(),
        },
        season,
        series,
        author,
        toggles,
        selectors,
        ...bindFieldsToFieldset('images', images),
        ...bindFieldsToFieldset('messaging', messaging),
        ...bindFieldsToFieldset('details', details),
        collaboration,
        artists,
        performances,
    ],
    initialValue: {
        toggles: {
            isHiddenFromWebsite: false,
            isCollaboration: false,
        },
        selectors: {
            type: 'live',
            status: 'active',
            series: 'core',
        },
        contentAdvisory: {
            hasModal: false,
        },
        effectsAdvisory: {
            hasModal: false,
        },
        seo: {
            hide: false,
            publishedAt: new Date().toISOString(),
        },
    },
    preview: {
        select: {
            title: 'title',
            seasonTitle: 'season.title',
            media: 'posterImage',
        },
        prepare({ title, seasonTitle, media }: any) {
            return {
                title,
                subtitle: seasonTitle,
                media,
            };
        },
    },
    orderings: [
        {
            title: 'Show Date, Newest to Oldest',
            name: 'showDateDesc',
            by: [{ field: 'closeDate', direction: 'desc' }],
        },
    ],
};

export const objects = [
    showObjects.artists,
    showObjects.collaboration,
    showObjects.effectsAdvisory,
    showObjects.contentAdvisory,
    showObjects.detailItem,
    showObjects.tickets,
    showObjects.performance,
    showObjects.scriptAuthor,
    showObjects.selectors,
    showObjects.toggles,
];
