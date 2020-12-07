import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
flex: 1 0 100%;
background-color: ${({ theme }) => theme.colors.buttonBackground};
`;

export const List = styled.ul`
display: flex;
justify-content: center;
margin: 0;
padding: 0;
list-style-type: none;
`;

export const Item = styled.li`
margin: 20px 10px 20px 10px;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName: "active",
}))`
&.active {
    font-weight: bold;
}
color: ${({ theme }) => theme.colors.background};
text-decoration: none;
`;