import styled, { css } from "styled-components";

export const Symbol = styled.span`
    font-size: 25px;

    ${({ increase }) => increase && css`
        color: ${({ theme }) => theme.colors.increase};
    `};
    ${({ decrease }) => decrease && css`
        color: ${({ theme }) => theme.colors.decrease};
    `};

`;

export const Wrapper = styled.div`
    overflow-x: auto;
`;

export const StyledTable = styled.table`
    border-collapse: collapse;
    width: 100%;
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