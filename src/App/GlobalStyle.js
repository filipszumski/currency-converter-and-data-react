import { createGlobalStyle } from "styled-components";
import background from "../images/dollar-5360047_1920.jpg"

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    #root {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-image: url("${background}");
    background-size: cover;
    background-position: center;
    font-family: ${({theme}) => theme.fonts.primaryFont}
    }
`;