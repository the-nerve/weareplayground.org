import { Location } from './types';

const GMAPS_DIRECTIONS_BASE_URL =
    'https://www.google.com/maps/dir/?api=1&destination=';

const GMAPS_DEFAULT_TRAVEL_MODE = '&travelmode=driving';

/**
 * Create a Google Maps URL to generate pre-filled directions to a given destination.
 * Google requirements: https://developers.google.com/maps/url-encoding
 */
export const getGoogleMapsDirectionsURL = (
    address: Location['address'],
    googleTitle: Location['googleTitle']
) => {
    // MUST match a valid registered business in google or this will break
    const businessTitle = googleTitle?.toLowerCase();
    const addressString = `${address.street} ${address.city} ${address.stateCode} ${address.zipcode}`;
    const locationString = businessTitle
        ? `${businessTitle} ${addressString}`
        : addressString;
    // Google needs white space encoded as +
    const googleFriendlyLocationString = locationString.replace(/\s/g, '+');

    const locationURL = `${GMAPS_DIRECTIONS_BASE_URL}${googleFriendlyLocationString}${GMAPS_DEFAULT_TRAVEL_MODE}`;

    return encodeURI(locationURL);
};
