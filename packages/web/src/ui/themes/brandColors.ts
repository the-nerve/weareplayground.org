import { PaletteColor, Neutral, SystemColors } from './palette';

const orange: PaletteColor = {
    l2: '#FB7F37',
    l1: '#FA7223',
    base: '#F25C05',
    d1: '#D75204',
    d2: '#BE4804',
};

const blue: PaletteColor = {
    l2: '#173A5F',
    l1: '#122D4A',
    base: '#0C1E31',
    d1: '#07121D',
    d2: '#020508',
};

const neutral: Neutral = {
    100: '#FFFFFF',
    200: '#F2F2F3',
    300: '#D6D6D9',
    400: '#A2A2A9',
    500: '#888891',
    600: '#67676F',
    700: '#343438',
};

const system: SystemColors = {
    black: '#000000',
    white: '#FFFFFF',
};

export const brandColors = {
    orange,
    blue,
    neutral,
    system,
};
