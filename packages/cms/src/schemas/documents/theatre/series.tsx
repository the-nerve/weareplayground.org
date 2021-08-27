import React from 'react';
import { Share2 } from 'react-feather';

import { DocumentCollection } from '../../../types';

export const schema: DocumentCollection = {
    name: 'series',
    title: 'Series',
    icon: <Share2 />,
    disableSEO: true,
    fields: [
        {
            name: 'title',
            title: 'Series Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'identifier',
            title: 'Series ID',
            type: 'string',
            validation: (Rule: any) => Rule.required().lowercase(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
    ],
};
