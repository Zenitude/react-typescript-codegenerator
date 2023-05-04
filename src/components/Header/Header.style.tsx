import styled from "styled-components";
import { Link, NavLink } from 'react-router-dom';
import { navProps } from "../../utils/types/types";

export const HeaderContainer = styled.header`
    width: 100%;
    min-width: 280px;
    min-height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 5px #000;
    padding-inline: 20px;
    position: sticky;
    top: 0;
    z-index: 1;
    backdrop-filter: blur(5px);

    h1 {
        margin-right: auto;
        font-size: calc(1.2rem + 1vw);

        a {
            color: #000;
            text-decoration: none;
        }
    }
`;

export const NavContainer = styled.nav`
    display: flex;
    transition: left 1s ease-in-out;
    gap: 10px;
    flex-direction: ${({sizenav}: navProps) => sizenav < 430 ? `column` : `row`};
    ${({sizenav}: navProps) => sizenav < 430 && `
        width: 50%;
        position: absolute;
        top: 81px;
        border-radius: 5px;
        overflow:hidden;
        box-shadow: inset 0px 0px 5px #000;
        gap: 0;
        background: #fff;
    `}

    a {
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        
        ${({sizenav}: navProps) => sizenav < 430 && `
            width: 100%;
            height: 70px;
        `} 

        &.active {
            font-weight: bold;
        }
    }

    .activeLink {
        font-weight: bold;
    }

    &.active {
        left: 5px;
        animation : activeNav 1s ease-in-out;
    }

    &.inactive {
        left: -250px;
        animation : inActiveNav 1s ease-in-out;
    }

    @keyframes activeNav {
        0% {
            left: -250px;
        }
        90% {
            left: 25px;
        }
        100% {
            left: 5px;
        }
    }

    @keyframes inActiveNav {
        0% {
            left: 5px;
        }
        10% {
            left: 25px;
        }
        100% {
            left: -250px;
        }
    }
`;

export const LinkNav = styled(Link)`
    text-decoration: none;
    color: #000;
`;

export const NavigationLink = styled(NavLink)`
    text-decoration: none;
    color: #000;

    
`;

export const MenuBurger = styled.button`
    margin-block: auto;
    width: 50px;
    height: 50px;
    background: transparent;
    border: none;

    svg {
        width: 40px;
        height: 40px;
    }
`;