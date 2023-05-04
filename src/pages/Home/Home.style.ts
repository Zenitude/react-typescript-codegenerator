import styled from "styled-components";
import { Link } from 'react-router-dom';

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;
`;

export const LinkContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const LinkCode = styled(Link)`
    width: 130px;
    height: 30px;
    font-size: 0.9rem;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    border-radius: 15px;
    box-shadow: inset 0 0 5px #000;
`;