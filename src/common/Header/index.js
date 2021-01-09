import React from "react";
import { Container } from "./styled";
import { Clock } from "./Clock";
import { BaseInput } from "../../features/rates/BaseInput";
import { StyledHeader } from "./styled";
import { useLocation, useParams } from "react-router-dom";
import { toConverter, toLatestRates, toLatestRatesChart, toChart, toTrends } from "../../routes";

const Header = ({ title }) => {
    const location = useLocation();
    const params = useParams();

    return (
        <Container>
            {location.pathname === toConverter() ?
                <span></span> :
                location.pathname === toLatestRates ?
                    <BaseInput /> :
                    location.pathname === toLatestRatesChart(params.id) ?
                        <BaseInput /> :
                        location.pathname === toChart() ?
                            <BaseInput /> :
                            location.pathname === toTrends() ?
                                <BaseInput /> :
                                <span></span>
            }
            <Clock />
            <StyledHeader>
                {title}
            </StyledHeader>
        </Container>
    )
};

export { Header };