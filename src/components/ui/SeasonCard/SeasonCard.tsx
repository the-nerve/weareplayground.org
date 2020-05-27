import React from 'react';
import Img from 'gatsby-image';

import { SeasonCardProps } from './__types';

//  Import components
import * as Styled from './__styles';

export const SeasonCard: React.FC<SeasonCardProps> = ({
    season,
    className,
}) => {
    const seasonData = season.node;

    const { uid } = seasonData._meta;

    // Handle the custom show-feed images
    // Handle setting fallback if needed
    // Handle desktop / tablet / mobile sources as needed
    // Get Img Alt
	const imageSource = seasonData?.catalog_imageSharp?.childImageSharp.fluid; // eslint-disable-line

    // Handle setting the current season status/state (past, current, future)
    // This will need to be done based on the shows within the season itself
    // -- probably need to consider doing this at an Application/global level
    // Consider useReducer?
    // const [status, SetStatus] = useState('past');

    return (
        <Styled.SeasonCard className={className}>
            <Styled.SeasonCardLink to={`/seasons/${uid}`}>
                {seasonData.title}
                {imageSource ? <Img fluid={imageSource} alt="" /> : ``}
            </Styled.SeasonCardLink>
        </Styled.SeasonCard>
    );
};
