import styled from "styled-components";

export const StyledHeader = styled.h1`
    flex: 1 0 100%;
    text-align: center;
    color: ${({ theme }) => theme.colors.title};
    font-size: 30px;
    grid-column-start: 1;
    grid-column-end: 3;
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;