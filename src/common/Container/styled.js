import styled from "styled-components";

export const Wrapper = styled.div`
    flex: 0 1 750px;
    font-size: 18px;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 40px;
    border-radius: 50px;
    box-shadow: 0px 0px 8px 1px;
    opacity: 0.90;
    margin: 20px;
`;