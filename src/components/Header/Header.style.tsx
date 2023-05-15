import styled from "styled-components";
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
    width: 100%;
    min-width: 280px;
    min-height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-inline: 20px;
    position: sticky;
    top: 0;
    z-index: 1;
    backdrop-filter: blur(5px);

    h1 {
        font-size: calc(1.2rem + 1vw);
        text-align: center;

        a {
            color: #f1f1f1;
            text-decoration: none;
        }
    }
`;

export const LinkNav = styled(Link)`
    text-decoration: none;
    color: #000;
`;