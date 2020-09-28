import { palette } from './__palette';
import { InputTheme, InputThemes } from '../theme';

const light: InputTheme = {
    background: {
        default: palette.grey[100],
    },
    border: {
        default: palette.grey[200],
        focus: palette.secondary.dark,
    },
    color: {
        default: palette.secondary.dark,
        placeholder: palette.grey[400],
    },
};

const dark: InputTheme = {
    background: {
        default: palette.secondary.dark,
        focus: palette.secondary.extraDark,
    },
    border: {
        default: palette.grey[400],
        focus: palette.secondary.light,
    },
    color: {
        default: palette.grey[100],
        placeholder: palette.secondary.light,
    },
};

export const inputs: InputThemes = {
    light,
    dark,
};
