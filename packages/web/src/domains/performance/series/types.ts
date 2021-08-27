export type AvailableSeries = 'nerve' | 'co-act' | 'alter-ego';

export interface Series {
    title: string;
    identifier: AvailableSeries;
    description: string;
}
