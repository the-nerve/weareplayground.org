import { format } from 'date-fns';

/**
 *
 */
export const performance = {
    name: 'performance',
    title: 'Performance Occurrence',
    description: 'A single performance of the show',
    type: 'object',
    preview: {
        select: {
            title: 'datetime',
            tickets: 'tickets',
            isPWYW: 'isPWYW',
            hasTalkback: 'hasTalkback',
            isPreview: 'isPreview',
        },
        prepare(selection: any) {
            const { title, tickets, isPWYW, hasTalkback, isPreview } =
                selection;

            const showFeatures = [
                isPreview ? 'preview' : '',
                isPWYW ? 'pwyw' : '',
                hasTalkback ? 'talkback' : '',
            ];

            const featuresDisplay = showFeatures.filter(Boolean).join(', ');
            const price = tickets.price ? `$${tickets.price}` : 'not set';

            const subtitle = `ticketing: ${tickets.type} • price: ${price} • features: ${featuresDisplay}`;

            return {
                title: format(new Date(title), 'cccc » MMM dd, yyyy @ h:mm a'),
                subtitle,
            };
        },
    },
    fields: [
        {
            name: 'datetime',
            title: 'Show date & time',
            type: 'datetime',
            description: 'The starting date and time of the performance',
            validation: (Rule: any) => Rule.required(),
            options: {
                dateFormat: 'MM-DD-YYYY',
                timeFormat: 'h:mm:a',
                timeStep: 30,
            },
        },
        {
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                layout: 'radio',
                direction: 'horizontal',
                list: [
                    { value: 'active', title: 'Active' },
                    { value: 'cancelled', title: 'Cancelled' },
                ],
            },
        },
        {
            name: 'tickets',
            type: 'tickets',
        },
        {
            name: 'isPreview',
            title: 'Preview Performance',
            description: 'This performance is a dress preview',
            type: 'boolean',
        },
        {
            name: 'isPWYW',
            title: 'Pay What You Want',
            description: 'This is a Pay What You Want (PWYW) performance',
            type: 'boolean',
        },
        {
            name: 'hasTalkback',
            title: 'Talkback After Performance',
            description: 'This performance has a talkback afterwards',
            type: 'boolean',
        },
    ],
    initialValue: {
        isPreview: false,
        isPWYW: false,
        hasTalkback: false,
    },
};
