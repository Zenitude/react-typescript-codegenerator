import styled from "styled-components";

export const QRCodeContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding-bottom: 20px;

    div:first-child {
        min-height: 250px;
        flex-grow: 1;
        position: relative;

        svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    > div:nth-child(2) {
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        button {
            width: 130px;
            height: 30px;
            border: none;
            font-size: 0.9rem;
            background-color: rgba(0,0,0,0.2);
            color: #551A8B;
            display: flex;
            justify-content: center;
            align-items: center;
            text-transform: uppercase;
            text-decoration: none;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 600;
            border-radius: 15px;
            box-shadow: inset 0 0 5px #000;
        }
    }

    form {
        width: 50%;
        min-width: 260px;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 10px;

        fieldset {
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 10px;

            legend {
                padding-inline: 15px;
                font-weight: bold;
            }

            div {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap: 5px;
            }

            label {
                display: inline-block;
                min-width: 240px;
            }

            input {
                padding-inline: 5px;
                flex-grow: 1;
                min-width: 240px;
            }

            select {
                flex-grow: 1;
                min-width: 240px;
            }
        }
    }

    @media all and (max-width: 450px) {
        svg {
            max-width: 240px;
        }
    }
`;