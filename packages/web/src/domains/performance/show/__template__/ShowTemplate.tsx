import React, { useRef } from 'react';
import { graphql, PageProps } from 'gatsby';

import { useGetMetaImage, useCurrentURL } from '@web/shared/hooks';
import { PageBasicSEO, StructuredData } from '@web/domains/app/seo';

import { Divider } from '@web/ui/core';
import { NewsSubscribeCTA } from '@web/ui/molecules';

import { SingleSeasonProvider } from '../../season/__context__';
import { SingleShowProvider } from '../__context__';
import { ShowPageProps, ShowPageGatsbyContext } from './types';

import {
    getTotalPerformanceCount,
    getTotalTicketedPerformanceCount,
    getTotalPWYWPerformanceCount,
} from '../__lib__';

import {
    Hero,
    ActionBar,
    Performances,
    PerformanceStats,
    TheStory,
    Information,
} from './components';

const SingleShowLanding: React.FC<PageProps<PageData, ShowPageGatsbyContext>> =
    ({ data, pageContext, location }) => {
        const { sanityShow: show } = data;
        const { slug, seasonSlug, seasonURL } = pageContext;

        const url = useCurrentURL(location.pathname);
        const metaImage = useGetMetaImage('show', show.seo.image);

        const performanceCount = {
            total: getTotalPerformanceCount(show.performances),
            ticketed: getTotalTicketedPerformanceCount(show.performances),
            pwyw: getTotalPWYWPerformanceCount(show.performances),
        };

        return (
            <SingleSeasonProvider slug={seasonSlug}>
                <SingleShowProvider slug={slug}>
                    <PageBasicSEO
                        url={url}
                        title={show.seo.title}
                        description={show.seo.description}
                        image={metaImage}
                        hideSEO={show.seo.hide}
                    />
                    {/* Do not output structured data if this page will be hidden from SEO */}
                    {show.seo.hide ? null : (
                        <StructuredData
                            pageSchemaData={{
                                pageURL: url,
                                title: show.seo.title,
                                description: show.seo.description,
                                image: metaImage,
                                datePublished: show.seo.publishedAt,
                                dateModified: show._updatedAt,
                            }}
                        />
                    )}
                    <Hero
                        bgImage={{ image: show?.heroImage?.asset }}
                        actionBar={<ActionBar url={url} />}
                    />
                    <TheStory rawContent={show._rawDescription} />
                    <Divider color="paper" />
                    <Information
                        runtime={{
                            hours: show.runtimeHours,
                            minutes: show.runtimeMinutes,
                        }}
                        intermissionCount={show.intermissionCount}
                        location={show.location}
                        series={show.series}
                        rating={show.rating}
                        triggerWarning={show.triggerWarning}
                        contentAdvisory={show.contentAdvisory}
                        effectsAdvisory={show.effectsAdvisory}
                    />
                    <PerformanceStats performanceCount={performanceCount} />
                    <Performances performances={show.performances} />
                    <NewsSubscribeCTA />
                </SingleShowProvider>
            </SingleSeasonProvider>
        );
    };

export const showQuery = graphql`
    query showData($id: String!) {
        sanityShow(_id: { eq: $id }) {
            # Toggles
            # toggles {
            #     isCollaboration
            # }

            # # Selectors
            # selectors {
            #     type
            #     status
            # }

            # CORE SHOW INFO
            heroImage {
                asset {
                    _id
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        width: 1600
                        placeholder: BLURRED
                    )
                }
            }
            title
            author {
                name
                bioLink
                scriptLink
            }
            openDate
            closeDate

            ## PERFORMANCE INFORMATION

            # Series Information
            series {
                title
                identifier
                description
            }

            # Location Information
            location {
                googleTitle
                title
                address {
                    city
                    state
                    stateCode
                    street
                    zipcode
                }
                geolocation {
                    lat
                    lng
                }
                # _rawDirections(resolveReferences: { maxDepth: 10 })
                # _rawParking(resolveReferences: { maxDepth: 10 })
            }

            # Additional Performance Information
            runtimeHours
            runtimeMinutes
            intermissionCount

            # Content-related ratings & advisories
            rating
            triggerWarning
            contentAdvisory {
                _rawModalContent(resolveReferences: { maxDepth: 10 })
                copy
                hasModal
                modalTriggerText
            }

            effectsAdvisory {
                _rawModalContent(resolveReferences: { maxDepth: 10 })
                copy
                hasModal
                modalTriggerText
            }

            # additionalDetails {
            #     title
            #     copy
            #     icon
            #     hasModal
            #     modalTriggerText
            #     _rawModalContent(resolveReferences: { maxDepth: 10 })
            # }

            ## PERFORMANCE AND TICKETS
            performances {
                datetime
                hasTalkback
                isPWYW
                isPreview
                status
                tickets {
                    type
                    price
                    externalLink
                }
            }

            ## MESSAGING
            _rawDescription(resolveReferences: { maxDepth: 10 })

            ## SEO Settings
            _createdAt
            _updatedAt
            seo {
                title
                hide
                description
                image {
                    alt
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
    sanityShow: ShowPageProps;
}

export default SingleShowLanding;
