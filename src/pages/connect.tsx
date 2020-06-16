import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { GatsbyPageContext } from '@type/gatsby';

// Import Typescript interfaces
import { Layout } from '@components/layout';

const AboutPage: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    return (
        <Layout noHeader={false} noFooter={false}>
            About Page
        </Layout>
    );
};

/**
 * ----------
 * Prop Types
 * ----------
 */

interface PageData {
    prismic: {
        home_page: {
            body: any;
        };
    };
}

export default AboutPage;
