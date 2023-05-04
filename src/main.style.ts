import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, ::before, ::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        z-index: 0;
    }

    html, body {
        width: 100%;
        height: 100%;
        font-family: Arial, Helvetica, sans-serif;
    }

    #root {
        width: 100%;
        height: 100%;
    }
`;