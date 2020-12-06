import React from "react";
import { Clock } from "./Clock";
import { Wrapper } from "./styled";

export const Container = ({ children }) => (
    <Wrapper>
        <Clock />
        {children}
    </Wrapper>
);