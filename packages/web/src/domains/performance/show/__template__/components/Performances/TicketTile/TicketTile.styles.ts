import styled from 'styled-components';

export const TicketTile = styled.li<{ isAvailable: boolean }>`
    .tile {
        height: 100%;
    }

    .action {
        display: block;
        margin-top: auto;
        width: 100%;
    }
`;
