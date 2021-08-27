import React from 'react';

import { BodyText, Container, Icon } from '@web/ui/core';
import { SocialShareModal, DateRange } from '@web/ui/molecules';

import { useSingleShowContext } from '../../../__context__';

import * as styled from './ActionBar.styles';

export const ActionBar: React.FC<IActionBar> = ({ url }) => {
    const { currentShow } = useSingleShowContext();

    return (
        <styled.ActionBar>
            <Container className="container">
                <div className="dates">
                    <BodyText color="light" size="m" weight="bold">
                        <DateRange
                            icon={<Icon name="Calendar" size="s" />}
                            startDate={currentShow?.openDate || 'tbd'}
                            endDate={currentShow?.closeDate || 'tbd'}
                        />
                    </BodyText>
                </div>
                <div className="share">
                    <SocialShareModal
                        shareURL={url}
                        socialShareText={`Check out "${
                            currentShow?.title || 'this show'
                        }" at The Nerve!`}
                    />
                </div>
            </Container>
        </styled.ActionBar>
    );
};

export interface IActionBar {
    url: string;
}
