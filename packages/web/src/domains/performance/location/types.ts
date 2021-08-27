export interface Address {
    city: string;
    state: string;
    stateCode: string;
    street: string;
    zipcode: string;
}

export interface GeoLocation {
    lat: string;
    lng: string;
}

export interface Location {
    title: string;
    googleTitle?: string;
    address: Address;
    geolocation: GeoLocation;
}
