import React from 'react';
import styled from 'styled-components';
import {
    GrittyHeading,
    BodyText,
    Section,
    Container,
    PortableText,
} from '@web/ui/core';
import { spacing, breakpoints } from '@web/ui/tokens';

const StyledStorySection = styled(Section)`
    padding: ${spacing.layout.m} 0;
    ${breakpoints.m} {
        padding: ${spacing.layout.l} 0;
    }
    .title {
        margin-bottom: ${spacing.layout.s};
    }
`;

export const TheStory = ({ rawContent }: TheStoryProps) => {
    return (
        <StyledStorySection>
            <Container maxWidth="s">
                <GrittyHeading
                    as="h2"
                    bgColor="neutralLight"
                    color="dark"
                    size="s"
                    className="title"
                    offset={-1}
                >
                    The Story
                </GrittyHeading>
                <PortableText content={rawContent} />
            </Container>
        </StyledStorySection>
    );
};

interface TheStoryProps {
    rawContent: any[];
}
