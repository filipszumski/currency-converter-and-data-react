import React from "react";
import { Container } from "./styled";
import { Clock } from "./Clock";
import { BaseInput } from "../../features/rates/BaseInput";
import { StyledHeader } from "./styled";
import { useLocation, useParams } from "react-router-dom";

const Header = ({ title }) => {
    const location = useLocation();
    const params = useParams();

    return (
        <Container>
            {location.pathname === "/convarter" ?
                <></> :
                location.pathname === "/latest-rates" ?
                    <BaseInput /> :
                    location.pathname === `/latest-rates/${params.id}` ?
                        <></> :
                        location.pathname === "/chart" ?
                            <BaseInput /> :
                            location.pathname === "/trends" ?
                                <BaseInput /> :
                                <></>
            }
            <Clock />
            <StyledHeader>
                {title}
            </StyledHeader>
        </Container>
    )
};

export { Header };