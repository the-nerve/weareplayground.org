import styled from 'styled-components';

import { animation, spacing } from '@web/ui/tokens';

export const DesktopNavigation = styled.nav`
    ul {
        align-items: center;
        display: flex;
        justify-content: flex-end;
        list-style: none;

        /* Standard link items (not button links) */
        a:not(.button) {
            display: block;
            padding: ${spacing.component.s} ${spacing.component.s};
            position: relative;

            span {
                transition: ${animation.linkHover};
            }
        }

        /* Current page link item text */
        a.--is-active > span {
            color: ${({ theme }) => theme.typography.light};
        }

        /* Control hover effect on the text of all non-button menu links */
        a:hover:not(.button) > span {
            color: ${({ theme }) => theme.typography.light};
        }

        /* A special list item that usually contains an important button within (i.e. donate). */
        li.highlight {
            margin-left: ${spacing.component.s};
        }
    }
`;
