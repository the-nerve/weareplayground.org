import React from 'react';

import { Container, Logo } from '@web/ui/core';
import { Link } from '@web/domains/app/routing';

import { DesktopNavigation } from './DesktopNavigation/DesktopNavigation';

import { HeaderProps } from './__types';
import * as styled from './__styles';

export const Header: React.FC<HeaderProps> = () => {
    return (
        <styled.Header>
            <Container className="container" maxWidth="l">
                <Link to="/" className="brand" activeClassName="--is-active">
                    <Logo
                        type="Lockup"
                        size="l"
                        color="light"
                        responsive={{ size: 'm', breakpoint: 'm' }}
                    />
                    <h1 className="u-visually-hidden">The Nerve Theatre</h1>
                </Link>
                <DesktopNavigation />
            </Container>
        </styled.Header>
    );
};

export * from './__types';
