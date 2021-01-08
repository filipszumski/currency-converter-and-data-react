import styled from "styled-components";

export const Wrapper = styled.div`
    font-family: ${({ theme }) => theme.fonts.clockFont};
    text-align: end;
    font-size: 14px;
    margin: 0;

    @media(max-width:542px) {
        order: -1;
        margin-bottom: 10px;
        justify-self: flex-end;
}
`;