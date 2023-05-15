import styled, { createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *, ::before, ::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body {
        width: 100%;
        height: 100%;
        font-family: Arial, Helvetica, sans-serif;
        background: rgb(50,55,98);
        color: #fff;
    }

    #root {
        width: 100%;
        height: 100%;
    }
`;

export const LayoutContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;

    main {
        flex-grow: 1;
    }
`;