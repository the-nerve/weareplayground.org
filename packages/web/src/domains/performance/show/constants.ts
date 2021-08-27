export enum SHOW_STATUS_MAP {
    ACTIVE = 'active',
    CANCELLED = 'cancelled',
    FUTURE = 'future',
    PAST = 'archived',
    COMING_SOON = 'coming-soon',
    DEFAULT = 'unknown',
}

export enum PERFORMANCE_TICKET_TYPE {
    DOOR = 'door',
    EXTERNAL = 'external',
    INTERNAL = 'internal',
}

export const TICKET_TYPE_MESSAGING = {
    [PERFORMANCE_TICKET_TYPE.DOOR]: 'Tickets at Door',
    [PERFORMANCE_TICKET_TYPE.EXTERNAL]: 'Get Tickets',
    [PERFORMANCE_TICKET_TYPE.INTERNAL]: 'Unavailable',
};

export enum PERFORMANCE_FEATURES {
    PWYW = 'pay-what-you-want',
    TALKBACK = 'talkback',
    PREVIEW = 'dress-preview',
}
