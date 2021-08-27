import React from 'react';
import styled from 'styled-components';
import { useLocation } from '@reach/router';

import {
    Avatar,
    BodyText,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Container,
    Divider,
    Heading,
    Icon,
    List,
    ListItem,
    Section,
    FillButton,
    OutlineButton,
    GhostButton,
} from '@web/ui/core';
import { breakpoints, grid, spacing } from '@web/ui/tokens';

import { SocialShareModal } from '@web/ui/molecules';

// STYLES
const StyledAlternateGivingSection = styled(Section)`
    padding: ${spacing.layout.l} 0;

    .intro > .heading {
        margin-bottom: ${spacing.component.l};
    }

    .intro > .copy {
        max-width: 550px;
    }

    .community-giving {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        grid-gap: ${spacing.component.xxxl};
        margin-top: ${spacing.layout.m};
        margin-bottom: ${spacing.layout.m};
    }

    .share {
        max-width: 650px;
        margin: 0 auto;
    }
`;

// CONFIG
const amazonSmile = {
    title: 'Amazon Smile',
    subtitle: 'You shop, we earn $$',
    url: 'https://smile.amazon.com/',
    buttonText: 'Get Started Now',
    wishlistUrl:
        'https://smile.amazon.com/hz/charitylist/ls/2IIOUNXC7E9IY/ref=smi_ext_lnk_lcl_cl',
    wishlistButtonText: 'View Wishlist',
    steps: [
        'Sign into smile.amazon.com',
        <>
            Go to <strong>Your Account</strong> and select the option to{' '}
            <strong>Change your charity</strong>
        </>,
        <>
            Search for/select <strong>The Nerve Theatre</strong>
        </>,
        <>
            A percentage of personal purchases (at no extra cost) will directly
            support The Nerve
        </>,
        <>OR you can purchase/donate items to us via our wishlist</>,
    ],
};

const krogerRewards = {
    title: 'Kroger Community Rewards',
    subtitle: 'You get groceries, we get $$',
    url: 'https://www.kroger.com/i/community/community-rewards',
    buttonText: 'Get Started Now',
    steps: [
        'Create/sign in to your account at kroger.com',
        <>
            Go to <strong>Your Account</strong> and select the{' '}
            <strong>Community Rewards</strong> menu item
        </>,
        <>
            Search for organization <strong>XM202</strong>
        </>,
        <>
            FYI: You will see <strong>Playground Theatre, Inc.</strong>, but we
            are in the process of updating it post-rebrand.
        </>,
        <>
            A percentage of your grocery purchases (at no extra cost) will
            directly support The Nerve
        </>,
    ],
};

export const AlternateGivingSection = () => {
    const { href } = useLocation();

    return (
        <>
            <StyledAlternateGivingSection>
                <Container>
                    <div className="intro">
                        <Heading
                            size="s"
                            color="light"
                            className="heading"
                            as="h3"
                        >
                            Short on cash?
                        </Heading>
                        <BodyText color="light" size="m" className="copy">
                            Ooof. We've been there. Here are 3 other ways you
                            can support us that cost you literally $0 and only a
                            few minutes of your time.
                        </BodyText>
                    </div>

                    <div className="community-giving">
                        {/* Amazon Smile */}
                        <Card
                            layout="stacked"
                            bgColor="paper"
                            variant="outlined"
                            borderColor="paperLight"
                            spacing={{ desktop: 'l', mobile: 'm' }}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar borderColor="neutral">1</Avatar>
                                }
                            >
                                <BodyText
                                    weight="bold"
                                    color="light"
                                    size="l"
                                    as="h4"
                                >
                                    {amazonSmile.title}
                                </BodyText>
                                <BodyText size="m" color="medium">
                                    {amazonSmile.subtitle}
                                </BodyText>
                            </CardHeader>
                            <Divider color="paperLight" />
                            <CardContent>
                                <List itemSpacing="xs" as="ol">
                                    {amazonSmile.steps.map((text, index) => (
                                        <ListItem key={`amazon-smile-${index}`}>
                                            <Icon
                                                name="Checkmark"
                                                size="xs"
                                                color="accent"
                                            />
                                            <BodyText size="m" color="medium">
                                                {text}
                                            </BodyText>
                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>
                            <CardActions>
                                <OutlineButton
                                    size="s"
                                    to={amazonSmile.url}
                                    color="primary"
                                >
                                    {amazonSmile.buttonText}
                                </OutlineButton>
                                <OutlineButton
                                    size="s"
                                    to={amazonSmile.wishlistUrl}
                                    color="tertiary"
                                >
                                    {amazonSmile.wishlistButtonText}
                                </OutlineButton>
                            </CardActions>
                        </Card>

                        {/* Kroger Community Rewards */}
                        <Card
                            layout="stacked"
                            bgColor="paper"
                            variant="outlined"
                            borderColor="paperLight"
                            spacing={{ desktop: 'l', mobile: 'm' }}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar borderColor="neutral">2</Avatar>
                                }
                            >
                                <BodyText
                                    weight="bold"
                                    color="light"
                                    size="l"
                                    as="h4"
                                >
                                    {krogerRewards.title}
                                </BodyText>
                                <BodyText size="m" color="medium">
                                    {krogerRewards.subtitle}
                                </BodyText>
                            </CardHeader>
                            <Divider color="paperLight" />
                            <CardContent>
                                <List itemSpacing="xs" as="ol">
                                    {krogerRewards.steps.map((text, index) => (
                                        <ListItem
                                            key={`kroger-community-rewards-${index}`}
                                        >
                                            <Icon
                                                name="Checkmark"
                                                size="xs"
                                                color="accent"
                                            />
                                            <BodyText size="m" color="medium">
                                                {text}
                                            </BodyText>
                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>
                            <CardActions>
                                <OutlineButton
                                    size="s"
                                    to={krogerRewards.url}
                                    color="primary"
                                >
                                    {krogerRewards.buttonText}
                                </OutlineButton>
                            </CardActions>
                        </Card>
                    </div>

                    {/* Share with your friends */}
                    <div className="share">
                        <Card
                            layout="stacked"
                            spacing={{ desktop: 'l', mobile: 'm' }}
                            bgColor="default"
                        >
                            <CardHeader
                                avatar={
                                    <Avatar borderColor="neutral">3</Avatar>
                                }
                            >
                                <BodyText
                                    weight="bold"
                                    color="light"
                                    size="l"
                                    as="h4"
                                >
                                    Tell your friends about us
                                </BodyText>
                                <BodyText size="m" color="medium">
                                    You talk, we grow
                                </BodyText>
                            </CardHeader>
                            <CardContent verticalSpacing="s">
                                <BodyText size="m" color="light">
                                    A large majority of our audience members saw
                                    their first Nerve show because they heard
                                    about us through a friend.
                                </BodyText>
                            </CardContent>
                            <CardActions>
                                <SocialShareModal
                                    title="Say something cool about us"
                                    socialShareText="Check out The Nerve. They are doing some seriously cool shit in Dayton."
                                    shareButtonText="Help spread the word"
                                    shareURL={href}
                                />
                            </CardActions>
                        </Card>
                    </div>
                </Container>
            </StyledAlternateGivingSection>
        </>
    );
};
