import React from 'react';
import { BodyText, CardContent, CardActions } from '@web/ui/core';

import * as styled from './InfoCard.styles';

export const InfoCard: React.FC<InfoCardProps> = ({
    label,
    actions,
    children,
    className,
}) => {
    return (
        <styled.InfoCard bgColor="paperDark" className={className} withGutter>
            <CardContent disableSpacing>
                {label && (
                    <BodyText
                        color="medium"
                        size="xs"
                        weight="bold"
                        textTransform="uppercase"
                        className="label"
                    >
                        {label}
                    </BodyText>
                )}
                {children}
            </CardContent>
            {actions && <CardActions disableSpacing>{actions}</CardActions>}
        </styled.InfoCard>
    );
};

interface InfoCardProps {
    className?: string;
    label?: string;
    actions?: JSX.Element[];
}
