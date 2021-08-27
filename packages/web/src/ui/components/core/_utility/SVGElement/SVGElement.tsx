import React from 'react';

export const SVGElement: React.FC<SVGElementProps> = ({
    name,
    path,
    viewBox,
    title,
    desc,
    ...others
}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} {...others}>
        {title && <title>{title}</title>}
        {desc && <desc>{desc}</desc>}
        {path}
    </svg>
);

export interface SVGElementProps {
    name: string;
    path: React.ReactElement;
    viewBox: string;
    title?: string;
    desc?: string;
    role?: string;
}
