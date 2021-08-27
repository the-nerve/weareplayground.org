export const selectors = {
    title: 'Show Selectors',
    name: 'showSelectors',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            title: 'Select » show type',
            name: 'type',
            description: '',
            type: 'string',
            options: {
                layout: 'radio',
                direction: 'horizontal',
                list: [
                    { title: 'Live', value: 'live' },
                    { title: 'Virtual', value: 'virtual' },
                ],
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            title: 'Select » show status',
            name: 'status',
            description: '',
            type: 'string',
            options: {
                layout: 'radio',
                direction: 'horizontal',
                list: [
                    { value: 'active', title: 'Active' },
                    { value: 'cancelled', title: 'Cancelled' },
                ],
            },
            validation: (Rule: any) => Rule.required(),
        },
    ],
};
