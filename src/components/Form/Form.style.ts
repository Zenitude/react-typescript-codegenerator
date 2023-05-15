import styled from "styled-components";

export const FormContainer = styled.form`
    margin-top: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .activeChevron {
        transform: rotate(180deg);
    }

    @media all and (min-width: 900px) {
        position: absolute;
        inset: 0;
        margin-top: 0;
        gap: 0;
        
        div {
            position: absolute;
            border-radius: initial;
        }

        .link, .fgColor {
            border-radius: 15px;

            button {
                border-radius: 0 15px 15px 0;
            }
        }

        .level, .bgColor {
            border-radius: 15px;

            button {
                border-radius: 15px 0 0 15px;
            }
        }

        .link {
            top: 20px;
        }

        .fgColor {
            top: 170px;
        }

        .level {
            top: 20px;
            right: 0;
            flex-direction: row-reverse;
        }

        .bgColor {
            top: 170px;
            right: 0;
            flex-direction: row-reverse;
        }

        
    }
`;

export const Container = styled.div`
    width: 90%;
    margin-inline: auto;
    display: flex;
    flex-direction: row;
    height: 50px;
    align-items: center;
    box-shadow: 0 0 5px #000;
    border-radius: 15px;
    overflow: hidden;
    
    label, input, select {
        flex-grow: 1;
        height: 100%;
        padding-left: 15px;
    }

    label {
        display: flex;
        align-items: center;
    }

    input {
        padding-right: 15px;
    }

    button {
        min-width: 50px;
        min-height: 50px;
        background-color: rgba(255,255,255,1);
        border-radius: 0 15px 15px 0;

        svg {
            width: 40px;
            height: 40px;
        }
    }

    @media all and (min-width: 900px) {
        width: 220px;
        margin-inline: 0;

        label, input, select {
            width: 170px;
        }
    }
`;