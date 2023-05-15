import styled from "styled-components";

export const ContainerQrCode = styled.div`
    position: relative;
    border-radius: 5px;

    canvas {
        border-radius: 5px;
        box-shadow: 0 0 50px #000;
    }

    button {
        z-index: 10;
        cursor: pointer;
        position: absolute;
        bottom: -50px;
        width: 50px;
        height: 50px;
        background: #fff;
        border: none;
        padding: 5px;
        border-radius: 5px;

        &:first-of-type {
            left: 0;
        }

        svg {
            width: 100%;
            height: 100%;
        }
    }
`;