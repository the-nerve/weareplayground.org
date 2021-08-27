import React from 'react';
import { BodyText, TextButton, Icon } from '@web/ui/core';
import {
    Location,
    getGoogleMapsDirectionsURL,
} from '@web/domains/performance/location';

import * as styled from './LocationCard.styles';

export const LocationCard = ({ location, className }: LocationCardProps) => {
    const directionsURL = getGoogleMapsDirectionsURL(
        location.address,
        location.googleTitle
    );

    return (
        <styled.LocationCard
            label="location"
            className={className}
            actions={[
                <TextButton
                    to={directionsURL}
                    size="s"
                    color="tertiary"
                    key="directions"
                    endIcon={<Icon name="NewTab" size="xxs" />}
                >
                    Get Directions
                </TextButton>,
            ]}
        >
            <div className="header">
                <Icon name="MapMarker" size="s" color="light" />
                <BodyText color="light" size="m" weight="bold">
                    {location.title}
                </BodyText>
            </div>
            <div className="address">
                <BodyText size="s" color="light">
                    {location.address.street} {location.address.city},{' '}
                    {location.address.state}, {location.address.zipcode}
                </BodyText>
            </div>
        </styled.LocationCard>
    );
};

interface LocationCardProps {
    className?: string;
    location: Location;
}
