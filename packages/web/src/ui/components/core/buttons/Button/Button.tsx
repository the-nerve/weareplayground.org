import React from 'react';

import {
    FillButtonProps,
    GhostButtonProps,
    OutlineButtonProps,
    IconButtonProps,
    TextButtonProps,
} from './Button.d';

import * as styled from './Button.styles';

export const FillButton: React.FC<FillButtonProps> = (props) => {
    const { color, children, ...others } = props;

    return (
        <styled.FillButton color={color} {...others}>
            {children}
        </styled.FillButton>
    );
};

export const GhostButton: React.FC<GhostButtonProps> = (props) => {
    const { color, children, ...others } = props;

    return (
        <styled.GhostButton color={color} {...others}>
            {children}
        </styled.GhostButton>
    );
};

export const OutlineButton: React.FC<OutlineButtonProps> = (props) => {
    const { color, children, ...others } = props;

    return (
        <styled.OutlineButton color={color} {...others}>
            {children}
        </styled.OutlineButton>
    );
};

export const IconButton: React.FC<IconButtonProps> = (props) => {
    const { color, children, ...others } = props;

    return (
        <styled.IconButton color={color} {...others}>
            {children}
        </styled.IconButton>
    );
};

export const TextButton: React.FC<TextButtonProps> = (props) => {
    const { color, children, ...others } = props;

    return (
        <styled.TextButton color={color} {...others}>
            {children}
        </styled.TextButton>
    );
};

export type {
    FillButtonProps,
    GhostButtonProps,
    OutlineButtonProps,
    IconButtonProps,
    TextButtonProps,
} from './Button.d';
