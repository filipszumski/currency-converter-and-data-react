import styled from "styled-components";

export const Wrapper = styled.div`
    flex: 0 1 750px;
    font-size: 18px;
    background-color: ${({theme}) => theme.colors.background};
    padding: 30px;
    border-radius: 50px;
    opacity: 0.85;
    margin: 20px;
`;