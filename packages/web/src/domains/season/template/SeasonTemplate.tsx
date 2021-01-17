import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { useConfigContext } from '@nerve/shared/context';
import { useGetMetaImage, useCurrentURL } from '@nerve/shared/hooks';

import { SubscribeSection } from '@nerve/domains/engagement';
import { PageBasicSEO, StructuredData } from '@nerve/domains/seo';

import { SeasonPage, SeasonPageContext } from '../types';

const SeasonLanding: React.FC<PageProps<PageData, SeasonPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const { sanitySeason: season } = data;

    const url = useCurrentURL(location.pathname);
    const metaImage = useGetMetaImage('season', season.seo.image);

    return (
        <>
            <PageBasicSEO
                url={url}
                title={season.seo.title}
                description={season.seo.description}
                image={metaImage}
                hideSEO={season.seo.hide}
            />
            {/* Do not output structured data if this page will be hidden from SEO */}
            {season.seo.hide ? null : (
                <StructuredData
                    pageSchemaData={{
                        pageURL: url,
                        title: season.seo.title,
                        description: season.seo.description,
                        image: metaImage,
                        datePublished: season.seo.publishedAt,
                        dateModified: season._updatedAt,
                    }}
                />
            )}
            <SubscribeSection />
        </>
    );
};

export const seasonQuery = graphql`
    query seasonData($id: String!) {
        sanitySeason(_id: { eq: $id }) {
            _updatedAt
            title
            slug {
                current
            }
            tagline
            seo {
                title
                hide
                description
                image {
                    asset {
                        url
                    }
                }
                publishedAt
            }
        }
    }
`;

/**
 * ----------
 * Prop Types
 * ----------
 */

interface PageData {
    sanitySeason: SeasonPage;
}

export default SeasonLanding;
