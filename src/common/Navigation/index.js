import React from "react";
import { Nav, List, Item, StyledNavLink } from "./styled";
import { toConverter, toLatestRates, toChart, toTrends } from "../../routes";

export const Navigation = () => (
    <Nav>
        <List>
            <Item>
                <StyledNavLink to={toConverter()}>Kalkulator walut</StyledNavLink>
            </Item>
            <Item>
                <StyledNavLink to={toLatestRates()}>Ostatnie stawki</StyledNavLink>
            </Item>
            <Item>
                <StyledNavLink to={toChart()}>Ostatnie 30 dni</StyledNavLink>
            </Item>
            <Item>
                <StyledNavLink to={toTrends()}>Trends</StyledNavLink>
            </Item>
        </List>
    </Nav>


)
 