import React from "react";
import { Container } from "./styled";
import { Clock } from "./Clock";
import { BaseInput } from "../../features/rates/BaseInput";
import { StyledHeader } from "./styled";

const Header = ({ title }) => (
    <Container>
        <BaseInput />
        <Clock />
        <StyledHeader>
            {title}
        </StyledHeader>
    </Container>
);

export { Header };