import React from "react";
import { Header } from "./Header";
import { Clock } from "./Clock";
import { Wrapper } from "./styled";

export const Container = ({ children }) => (
    <Wrapper>
        <Clock />
        <Header />
        {children}
    </Wrapper>
);