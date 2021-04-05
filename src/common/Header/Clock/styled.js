import styled from "styled-components";

export const Wrapper = styled.div`
    font-family: ${({ theme }) => theme.fonts.clockFont};
    text-align: end;
    font-size: 14px;
    margin: 0;

    @media(max-width:768px) {
        flex: 1 0 100%;
        order: -1;
        margin-bottom: 15px;
        justify-self: flex-end;
}
`;