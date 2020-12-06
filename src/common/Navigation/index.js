import React from "react";

import { Nav, List, Item, StyledNavLink } from "./styled";
import { toConverter, toLatestRates } from "../../routes";

export const Navigation = () => (
    <Nav>
        <List>
            <Item>
                <StyledNavLink to={toConverter()}>Kalkulator walut</StyledNavLink>
            </Item>
            <Item>
                <StyledNavLink to={toLatestRates()}>Ostatnie stawki</StyledNavLink>
            </Item>
        </List>
    </Nav>


)
