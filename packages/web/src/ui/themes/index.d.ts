import { FlattenSimpleInterpolation } from 'styled-components';
import { Palette } from './palette';

/**
 * This file contains Typescript typings for all of our
 * theme properties. This allows us to do some really cool things,
 * like inferring available options in a components based on a
 * theme property.
 */

/**
 * Actions Themes
 */
export interface ActionTheme {
    background: {
        default: string;
        hover?: string;
        active?: string;
        disabled?: string;
        ghost?: string;
    };
    border: {
        default: string;
        hover?: string;
        active?: string;
        disabled?: string;
    };
    color: {
        default: string;
        hover?: string;
        active?: string;
        disabled?: string;
        inverted?: string;
    };
}

/**
 * Input Themes
 */
export interface InputTheme {
    background: {
        default: string;
        focus?: string;
    };
    border: {
        default: string;
        focus?: string;
    };
    color: {
        default: string;
        focus?: string;
        placeholder?: string;
    };
}

/**
 * Icon Themes
 */
export interface IconTheme {
    color: {
        default: string;
        hover?: string;
        hoverOpacity?: number;
    };
}

/**
 * Logo Themes
 */
export interface LogoTheme {
    bracketColor: string;
    textColor: string;
}

/**
 * Overlay Themes
 */
export interface OverlayTheme {
    color: string | FlattenSimpleInterpolation;
}

/**
 * App Surfaces
 */
export interface Surfaces {
    default: string;
    paperAccent: string;
    paperLight: string;
    paper: string;
    paperDark: string;
    accentLight: string;
    accent: string;
    accentDark: string;
    neutralLight: string;
    neutral: string;
    neutralDark: string;
}

/**
 * Typography Themes
 */
export interface TypographyThemes {
    light: string;
    medium: string;
    dark: string;
    accentLight: string;
    accent: string;
    accentDark: string;
    highlight: string;
    danger: string;
    success: string;
}

export interface AppTheme {
    palette: Palette;
    actions: {
        primary: ActionTheme;
        secondary: ActionTheme;
        tertiary: ActionTheme;
        danger: ActionTheme;
    };
    icons: {
        light: IconTheme;
        medium: IconTheme;
        dark: IconTheme;
        accent: IconTheme;
        highlight: IconTheme;
        highlightExtra: IconTheme;
    };
    inputs: {
        light: InputTheme;
        dark: InputTheme;
    };
    logo: {
        light: LogoTheme;
        dark: LogoTheme;
    };
    overlays: {
        verticalGradientDark: OverlayTheme;
        black45: OverlayTheme;
        black65: OverlayTheme;
        black85: OverlayTheme;
        dark45: OverlayTheme;
        dark55: OverlayTheme;
        dark65: OverlayTheme;
        dark85: OverlayTheme;
        dark85: OverlayTheme;
        dark90: OverlayTheme;
    };
    surfaces: Surfaces;
    typography: TypographyThemes;
}

// Props that later will be injected by styled-components
export type ThemeProps = { theme?: AppTheme };

/**
 * Export types for each contained section of our theme.This allows for better
 * re-usability across components.
 */

export * from './palette';

export type ActionThemes = AppTheme['actions'];
export type AvailableActionTheme = keyof ActionThemes;

export type AvailableSurface = keyof Surfaces;

// export type InputThemes = AppTheme['inputs'];
// export type AvailableInputTheme = keyof InputThemes;

export type IconThemes = AppTheme['icons'];
export type AvailableIconTheme = keyof IconThemes;

export type InputThemes = AppTheme['inputs'];
export type AvailableInputTheme = keyof InputThemes;

export type LogoThemes = AppTheme['logo'];
export type AvailableLogoTheme = keyof LogoThemes;

export type OverlayThemes = AppTheme['overlays'];
export type AvailableOverlayTheme = keyof OverlayThemes;

export type AvailableTypographyTheme = keyof TypographyThemes;
