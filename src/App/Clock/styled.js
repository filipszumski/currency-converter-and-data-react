import styled from "styled-components";

export const StyledClock = styled.p`
    font-family: ${({theme}) => theme.fonts.clockFont};
    font-size: 14px;
    margin: 0;
    text-align: end;
`;