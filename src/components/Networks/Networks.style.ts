import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NetworksContainer = styled.div`
    margin-block: 10px;
    width: 100%;
    min-height: 80px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;

    @media all and (min-width: 900px) {
        margin-top: 60px;
    }
`;

export const NetworkLink = styled(Link)`
    width: 60px;
    height: 60px;
    border-radius: 15px;
    overflow: hidden;
    filter: drop-shadow(0 0 1px #fff);
`;

export const NetworkImage = styled.img`
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 1px #fff);
`;