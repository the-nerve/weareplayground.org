import React, { useMemo } from 'react';
import { graphql, PageProps } from 'gatsby';

import { GatsbyPageContext, SanityDocumentSEO } from '@web/shared/types';

import { SimpleHero, NewsSubscribeCTA } from '@web/ui/molecules';
import {
    ShowPosterGrid,
    ShowCoreWithPoster,
    filterForPastShows,
} from '@web/domains/performance/show';

import PageTemplate from '@web/domains/page/__template__';
import { parseISO } from 'date-fns/esm';

const ArchivePage: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const { sanityArchivePage: page } = data;
    const { nodes: shows } = data.allSanityShow;

    const pastShows = useMemo(() => {
        return filterForPastShows(shows);
    }, [shows]);

    return (
        <PageTemplate
            seo={page.seo}
            lastUpdated={page._updatedAt}
            currentLocation={location.pathname}
        >
            <SimpleHero title={page.hero.title} subTitle={page.hero.subtitle} />
            <ShowPosterGrid shows={pastShows} />
            <NewsSubscribeCTA />
        </PageTemplate>
    );
};

export const query = graphql`
    query {
        sanityArchivePage {
            title
            slug {
                current
            }
            _updatedAt
            seo {
                title
                description
                hide
                publishedAt
                image {
                    alt
                    asset {
                        url
                    }
                }
            }

            hero {
                title
                copy
            }
        }

        allSanityShow(
            filter: { toggles: { isHiddenFromWebsite: { eq: false } } }
            sort: { order: DESC, fields: closeDate }
        ) {
            nodes {
                title
                slug {
                    current
                }
                openDate
                closeDate
                posterImage {
                    alt
                    asset {
                        _id
                        gatsbyImageData(
                            width: 500
                            placeholder: DOMINANT_COLOR
                            layout: FULL_WIDTH
                        )
                    }
                }
                author {
                    name
                }
                season {
                    title
                    slug {
                        current
                    }
                }
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
    sanityArchivePage: {
        _updatedAt: string;
        seo: SanityDocumentSEO;
        hero: {
            title: string;
            subtitle: string;
        };
    };
    allSanityShow: {
        nodes: ShowCoreWithPoster[];
    };
}

export default ArchivePage;
