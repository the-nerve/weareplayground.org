export const detailItem = {
    title: 'Detail Item',
    name: 'detailItem',
    type: 'object',
    fields: [
        {
            title: 'Icon',
            name: 'icon',
            type: 'icon',
            validation: (Rule: any) => Rule.required(),
        },
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            title: 'Copy',
            name: 'copy',
            type: 'text',
            rows: 2,
            validation: (Rule: any) => Rule.required(),
        },
        {
            title: 'Has Modal',
            name: 'hasModal',
            description: 'This item has a modal with additional information',
            type: 'boolean',
            validation: (Rule: any) => Rule.required(),
        },
        {
            title: 'Modal Trigger Text',
            name: 'modalTriggerText',
            description: 'The text that a user will click to trigger the modal',
            type: 'string',
        },
        {
            title: 'Modal Content',
            name: 'modalContent',
            type: 'contentBlock',
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'copy',
        },
    },
};

export const performanceDetails = {
    title: 'Performance Details',
    name: 'performanceDetails',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            name: 'runtimeHours',
            title: 'Runtime Hours',
            description:
                'How many hours does the show run for (whole numbers only)',
            type: 'number',
            validation: (Rule: any) => Rule.integer().positive().lessThan(4),
        },
        {
            name: 'runtimeMinutes',
            title: 'Runtime Minutes',
            description:
                'How many minutes does the show run for (whole numbers only)',
            type: 'number',
            validation: (Rule: any) => Rule.integer().positive().lessThan(60),
        },
        {
            name: 'intermissionCount',
            title: 'Number of Intermissions',
            description: 'How many intermissions does this show have?',
            type: 'number',
            validation: (Rule: any) => Rule.integer().positive().lessThan(3),
        },
        {
            name: 'contentAdvisory',
            description:
                'Detailed content disclaimers and warnings with relevant info',
            type: 'contentAdvisory',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'effectsAdvisory',
            type: 'effectsAdvisory',
            description:
                'Information about any dangerous or jarring effects used in the show',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'additionalDetails',
            title: 'Additional Show Details',
            description: '',
            type: 'array',
            options: {
                collapsible: true,
                collapsed: true,
            },
            of: [{ type: 'detailItem' }],
        },
        {
            name: 'rating',
            title: 'Rating',
            description: 'The age rating/appropriateness of this show.',
            type: 'string',
            options: {
                layout: 'radio',
                direction: 'horizontal',
                list: [
                    { title: 'R', value: 'r' },
                    { title: 'PG-13', value: 'pg13' },
                    { title: 'PG', value: 'pg' },
                ],
            },
        },
    ],
};
