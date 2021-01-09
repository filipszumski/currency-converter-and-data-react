import styled, { css } from "styled-components";

export const Input = styled.input`
    flex: 0 1 100%;
    border-radius: 10px;
    border: 1px solid teal;
    padding: 5px;
`;

export const Button = styled.button`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.buttonBackground};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.buttonText};
    padding: 8px;
    border: none;
    transition: filter 0.5s;

    &:hover {
        filter: brightness(110%);
    }
    &:active {
        filter: brightness(120%);
    }

    ${({ trends }) => trends && css`
        margin: 0px 10px 20px 10px
    `}
`;