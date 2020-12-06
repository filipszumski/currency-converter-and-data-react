import React from "react";

import { Nav, List, Item, StyledLink } from "./styled";
import { toConverter } from "../../routes";

export const Navigation = () => (
    <Nav>
        <List>
            <Item>
                <StyledLink to={toConverter()}>Kalkulator Walut</StyledLink>
            </Item>
            <Item>
                <StyledLink to={toConverter()}>Kalkulator Walut</StyledLink>
            </Item>
        </List>
    </Nav>


)
