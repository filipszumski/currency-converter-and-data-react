import styled from "styled-components";

export const StyledHeader = styled.h1`
    text-align: center;
    color: ${({ theme }) => theme.colors.title};
    font-size: 40px;
    grid-column-start: 1;
    grid-column-end: 3;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: minmax(125px, 1fr);
`;