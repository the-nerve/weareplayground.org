import { AvailableIconSize, AvailableBreakpoint } from '@web/ui/tokens';
import { AvailableIconTheme } from '@web/ui/themes';
import { AvailableIconName } from './__manifest__';
import { SVGElementProps } from '../../_utility';

export interface IconProps extends Omit<SVGElementProps, 'path' | 'viewBox'> {
    name: AvailableIconName;
    color?: AvailableIconTheme;
    size: AvailableIconSize;
    responsive?: {
        size: AvailableIconSize;
        breakpoint: AvailableBreakpoint;
    };
}

export type { AvailableIconName } from './__manifest__';
