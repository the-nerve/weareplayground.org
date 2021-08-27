import React from 'react';
import styled from 'styled-components';
import { borders, breakpoints, grid, spacing } from '@web/ui/tokens';

import { useConfigContext } from '@web/shared/context';
import { SanityImageDataWithAlt } from '@web/shared/types';

import {
    BodyText,
    Card,
    CardMedia,
    CardContent,
    CardHeader,
    Divider,
    BrandImage,
    List,
    ListItem,
    Icon,
    GrittyHeading,
    Container,
    Section,
    Heading,
    SectionProps,
    OutlineButton,
} from '@web/ui/core';

const StyledTempSeasonListSection = styled(Section)`
    padding: ${spacing.layout.l} 0;

    .intro-heading {
        margin-bottom: ${spacing.layout.l};
    }

    .intro-copy {
        margin-bottom: ${spacing.layout.l};
        max-width: 700px;
    }

    .tagline {
        margin-bottom: ${spacing.layout.xs};
    }

    .show-list {
        align-items: center;
        display: flex;
        list-style: none;
        flex-direction: column;
        justify-content: center;

        ${breakpoints.m} {
            flex-direction: row;
            flex-wrap: wrap;
        }
    }

    .show-list > li {
        flex: 1 0 auto;
        margin: ${spacing.component.l};
        max-width: 600px;
        width: 100%;

        ${breakpoints.m} {
            flex: 1 0 500px;
        }
    }

    .show .synopsis {
        margin-bottom: ${spacing.component.xxl};
    }

    .show .dates {
        display: flex;
        margin-bottom: ${spacing.component.l};
    }

    .show .dates-tag {
        background-color: ${({ theme }) => theme.surfaces.paper};
        align-items: center;
        display: flex;
        border-radius: ${borders.defaultRadius};
        border: 1px solid ${({ theme }) => theme.surfaces.paperLight};
        padding: ${spacing.component.xxs} ${spacing.component.xs};

        svg {
            margin-right: ${spacing.component.xs};
        }
    }

    .footer {
        margin-top: ${spacing.layout.s};
        text-align: center;
    }

    .footer .action {
        margin-top: ${spacing.component.l};
    }
`;

export const TempSeasonListSection: React.FC<TempSeasonProps> = ({
    tempBurningBoyImage,
    tempFriendArtImage,
    tempPuffsImage,
    auditionLink,
}) => {
    const shows = [
        {
            title: 'The Dream of The Burning Boy',
            author: 'David West Read',
            dates: 'Oct. 20-31',
            year: '2021',
            numberOfPerformances: '10',
            pwywPerformances: '2',
            synopsis:
                'A story about finding the strength to move on... and the courage to live without regret.',
            image: tempBurningBoyImage,
        },
        {
            title: 'Friend Art',
            author: 'Sofia Alvarez',
            dates: 'Dec. 8-19',
            year: '2021',
            numberOfPerformances: '10',
            pwywPerformances: '2',
            synopsis:
                'How late is too late to give up on your dreams and when are you really a "grown up"?',
            image: tempFriendArtImage,
        },
        {
            title: 'Puffs',
            author: 'Matt Cox',
            dates: 'May 18-29',
            year: '2022',
            numberOfPerformances: '10',
            pwywPerformances: '2',
            synopsis:
                'A tale for anyone who has never been destined to save the world.',
            image: tempPuffsImage,
            series: 'Alter Ego',
        },
    ];

    const { links } = useConfigContext();
    const auditionBlogLink = links.getPost(auditionLink);

    return (
        <StyledTempSeasonListSection bgColor="paperDark" className="">
            <Container>
                <Heading size="xs" color="medium" className="tagline">
                    Who the hell am I, anyway?
                </Heading>
                <GrittyHeading
                    size="m"
                    className="intro-heading"
                    bgColor="neutralLight"
                    color="dark"
                    offset={-2}
                >
                    Our 2021/2022 Season
                </GrittyHeading>

                <BodyText size="m" color="light" className="intro-copy">
                    This season explores identity; A topic we are all intimately
                    familiar with having gone through this pandemic. So many
                    people have grappled with their identity, questioned their
                    life choices, changed their path, or discovered a new part
                    of themselves. All three plays this season feature
                    characters who are either questioning who they are or
                    discovering who they want to be.
                </BodyText>

                <ul className="show-list">
                    {shows.map((show) => (
                        <li key={show.title}>
                            <Card
                                layout="stacked"
                                bgColor="default"
                                variant="outlined"
                                borderColor="paper"
                                spacing={{ desktop: 'l', mobile: 'm' }}
                                className="show"
                            >
                                <CardMedia>
                                    <BrandImage
                                        image={show.image.asset}
                                        alt={show.image.alt}
                                    />
                                </CardMedia>
                                <CardHeader>
                                    <div className="dates">
                                        <BodyText
                                            size="s"
                                            color="accent"
                                            className="dates-tag"
                                        >
                                            <Icon name="Calendar" size="xs" />
                                            {show.dates}, {show.year}
                                        </BodyText>
                                    </div>
                                    <BodyText
                                        weight="bold"
                                        color="light"
                                        size="l"
                                        as="h4"
                                    >
                                        {show.title}
                                    </BodyText>
                                    <BodyText size="m" color="medium">
                                        [ by {show.author} ]
                                    </BodyText>
                                </CardHeader>
                                <Divider color="paper" />
                                <CardContent>
                                    <BodyText
                                        color="light"
                                        size="m"
                                        className="synopsis"
                                    >
                                        {show.synopsis}
                                    </BodyText>
                                    <List itemSpacing="xxs">
                                        {show.series && (
                                            <ListItem>
                                                <Icon
                                                    name="Fire"
                                                    size="xs"
                                                    color="accent"
                                                />
                                                <BodyText
                                                    color="accent"
                                                    size="s"
                                                >
                                                    {show.title} is part of our{' '}
                                                    {show.series} series
                                                </BodyText>
                                            </ListItem>
                                        )}
                                        <ListItem>
                                            <Icon
                                                name="Calendar"
                                                size="xs"
                                                color="highlightExtra"
                                            />
                                            <BodyText color="medium" size="s">
                                                Ticketed Performances:{' '}
                                                {show.numberOfPerformances}
                                            </BodyText>
                                        </ListItem>
                                        <ListItem>
                                            <Icon
                                                name="Info"
                                                size="xs"
                                                color="highlightExtra"
                                            />
                                            <BodyText color="medium" size="s">
                                                Pay What You Want Performances:{' '}
                                                {show.pwywPerformances}
                                            </BodyText>
                                        </ListItem>
                                        <ListItem>
                                            <Icon
                                                name="Ticket"
                                                size="xs"
                                                color="highlightExtra"
                                            />
                                            <BodyText color="medium" size="s">
                                                Tickets: Coming Soon...
                                            </BodyText>
                                        </ListItem>
                                    </List>
                                </CardContent>
                            </Card>
                        </li>
                    ))}
                </ul>
            </Container>
            <Container maxWidth="s" className="footer">
                <BodyText color="medium" size="m">
                    * Tickets & additional information for each show will be
                    available soon.
                </BodyText>
                <OutlineButton
                    color="tertiary"
                    to={auditionBlogLink}
                    size="s"
                    startIcon={<Icon name="Calendar" size="xs" />}
                    className="action"
                >
                    Schedule Your Audition
                </OutlineButton>
            </Container>
        </StyledTempSeasonListSection>
    );
};

interface TempSeasonProps extends SectionProps {
    tempBurningBoyImage: SanityImageDataWithAlt;
    tempFriendArtImage: SanityImageDataWithAlt;
    tempPuffsImage: SanityImageDataWithAlt;
    auditionLink: string;
}
