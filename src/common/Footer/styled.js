import styled from "styled-components";

export const Paragraph = styled.p`
    display: flex;
    margin: 0px;
    color: ${({ theme }) => theme.colors.info};
    font-size: 14px;
    text-align: center;
    justify-content: center;
`;