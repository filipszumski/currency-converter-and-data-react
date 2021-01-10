import styled from "styled-components";

export const Wrapper = styled.div`
    overflow: auto;
    flex: 0 1 800px;
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 30px;
    border-radius: 50px;
    box-shadow: 0px 0px 8px 1px;
    opacity: 0.85;
    margin: 20px;
`;