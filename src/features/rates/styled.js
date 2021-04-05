import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Input = styled.input`
    flex: 1 0 auto;
    border-radius: 10px;
    border: 1px solid teal;
    padding: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        flex: 1 0 51%;
        width: 0;
    }
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

export const Symbol = styled.span`
    font-size: 25px;

    ${({ increase }) => increase && css`
        color: ${({ theme }) => theme.colors.increase};
    `};
    ${({ decrease }) => decrease && css`
        color: ${({ theme }) => theme.colors.decrease};
    `};

`;

export const TableCell = styled.td`
    border: 1px solid ${({ theme }) => theme.colors.black};
    padding: 10px;
    text-align: center;
`;

export const TableHeader = styled.th`
    border: 1px solid ${({ theme }) => theme.colors.black};
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.buttonBackground};
    color: ${({ theme }) => theme.colors.background};
`;

export const TableRow = styled.tr`
&:nth-child(even) {
    background-color: #eee;
};
&:hover {
    background-color: hsl(180deg 100% 25% / 50%);
}
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;

