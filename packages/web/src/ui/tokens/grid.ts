export const grid = {
    fluid: '100%',
    l: '1200px',
    m: '960px',
    s: '768px',
    xs: '568px',
    xxs: '480px',
};

export const flexibleContainerWidth = 93;
export const totalContainerGutter = 100 - flexibleContainerWidth;
export const containerGutter = totalContainerGutter / 2;

export type GridSizes = typeof grid;
export type AvailableGridSize = keyof GridSizes;
