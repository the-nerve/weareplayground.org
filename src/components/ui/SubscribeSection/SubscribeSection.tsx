import React from 'react';
import styled from 'styled-components';
import { breakpoints, spacing } from '@tokens';
import { useConfigContext } from '@context';

import { Container, Section } from '@components/layout';
import { BodyText, Heading, GrittyHeading } from '@components/foundations';

import { EmailSubscribe } from '../EmailSubscribe/EmailSubscribe';

const StyledSubscribeSection = styled(Section)`
    padding: ${spacing.layout.l} 0;

    .intro-copy {
        margin-top: ${spacing.layout.xs};
        margin-bottom: ${spacing.layout.s};
    }
`;

export const SubscribeSection: React.FC = () => {
    const config = useConfigContext();

    return (
        <StyledSubscribeSection
            bgImage={config.subscribe_image}
            overlay="dark90"
            bgPosition="center center"
        >
            <Container maxWidth="xs">
                <GrittyHeading
                    size="xs"
                    color="dark"
                    tag="h3"
                    bgColor="light"
                    offset={-2}
                    className="intro-title"
                >
                    {config.subscribe_title}
                </GrittyHeading>
                <BodyText tag="p" color="light" size="m" className="intro-copy">
                    {config.subscribe_copy}
                </BodyText>
                <EmailSubscribe />
            </Container>
        </StyledSubscribeSection>
    );
};
