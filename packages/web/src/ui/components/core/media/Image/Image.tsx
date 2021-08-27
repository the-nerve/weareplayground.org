import React from 'react';

import { GatsbyImage, getImage as getGatsbyImage } from 'gatsby-plugin-image';

import { getGatsbyImageData as getSanityImageData } from 'gatsby-source-sanity';
import { clientConfig } from '@web/shared/configs';

import { ImageProps } from './__types';

/**
 * A general note about this file: We are wrapping the Gatsby Image API in order to:
 *
 * 1. Provide a reference to a core component that lives in our design system instead of importing from a node module in our project.
 * 2. Give us flexibility to set global defaults or apply logic globally if needed
 * 3. Allow us to change the underlying API without affecting implementation.
 * 4. Allow us to more easily work with images coming from a gatsby-source plugin (CMS) that have their own API for working with Gatsby Images
 *
 * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-image/
 * @link https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/
 */

/**
 * A wrapper for Gatsby Image that allows it to work seamlessly with the Sanity CMS Image API.
 * * Note: Only use this component when consuming images that come from Sanity GraphQL Queries
 *
 * @link https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#gatsbyimage
 * @link https://www.gatsbyjs.com/plugins/gatsby-source-sanity/#using-images
 *
 * @param image Accepts an image reference from a Sanity GraphQL Query
 * @param sanityConfig The configuration for the Sanity image url builder query
 * @param alt The alt tag for the image
 * @param rest (as a spread) All params allowed by the underlying GatsbyImage component, minus the 'image' param (this is handled by Sanity helper utilities)
 */
export const Image = ({ image, alt, sanityConfig, ...rest }: ImageProps) => {
    if (!image) {
        console.log(
            'An image object was not provided. Nothing will be rendered. Object output:',
            { image }
        );
        return <></>;
    }

    /**
     * This makes our Image component easier to work with, because it allows us to pass in the entire image stack without
     * having to drill down to nested props (super fragile). It is smart enough to know what has been passed in and
     * what it needs to return for the image in question to work properly.
     *
     * It also allows the underlying Gatsby Image API to change without us having to worry about changing all of our
     * image queries.
     */
    const imageData = image.gatsbyImageData
        ? getGatsbyImage(image.gatsbyImageData)
        : getSanityImageData(image, { ...sanityConfig }, clientConfig.sanity);

    if (!imageData) {
        console.error(
            'There was an error loading the requested image from the Image component. Request details available in the output object:',
            {
                dataSourceType: image.gatsbyImageData ? 'gatsby' : 'sanity',
                requestedImageData: image,
                imageDataResults: imageData,
                alt,
            }
        );
        return null;
    }

    return <GatsbyImage image={imageData} alt={alt} {...rest} />;
};

export type { ImageProps } from './__types';
