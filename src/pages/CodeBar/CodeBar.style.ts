import styled from "styled-components";

export const BarCodeContainer = styled.main`

    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;

    div:first-child {
        width: 100%;
        flex-grow: 1;
        min-height: 250px;
        position: relative;

        svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%)!important;
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
            gap: 5px;

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
                width: 240px;
                text-align: left;
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
            max-width: 260px;
        }
    }
`;