import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-auto-columns: 1fr;
    grid-gap: 20px;
`;

export const Paragraph = styled.p`
    display: flex;
    margin: 0px;

    ${({ info }) => info && css`
        color: rgb(107, 107, 107);
        font-size: 14px;
    `}
    
    ${({ result }) => result && css`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        font-size: 28px;
        color: teal;
    `}
`;

export const Label = styled.label`
    flex: 1 0 100%;
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
        flex-wrap: wrap;
    }
`;

export const Select = styled.select`
    flex: 0 1 100%;
    border-radius: 10px;
    border: 1px solid teal;
    padding: 8px;
`;

export const Input = styled.input`
    flex: 0 1 100%;
    border-radius: 10px;
    border: 1px solid teal;
    padding: 8px;
`;

export const Button = styled.button`
    flex: 1;
    background-color: teal;
    border-radius: 5px;
    color: white;
    padding: 8px;
    border: none;

    &:hover {
        filter: brightness(110%);
    }
    &:active {
        filter: brightness(120%);
    }
`;

export const Span = styled.span`
    flex: 0 0 300px;

    @media (max-width: 767px) {
        flex: 0 1 auto;
    }
`;