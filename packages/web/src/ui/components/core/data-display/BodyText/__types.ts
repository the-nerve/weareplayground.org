import { AvailableBodyTypography } from '@web/ui/tokens';
import { AvailableTypographyTheme } from '@web/ui/themes';

export type AllowedTag =
    | 'span'
    | 'p'
    | 'h2'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'ul'
    | 'ol'
    | 'figcaption';

export interface BodyTextProps {
    size: AvailableBodyTypography;
    color?: AvailableTypographyTheme;
    weight?: 'regular' | 'bold';
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
    className?: string;
    as?: AllowedTag;
}
