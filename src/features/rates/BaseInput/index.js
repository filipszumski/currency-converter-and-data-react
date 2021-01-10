import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, StyledSpan } from "./styled";
import { selectBase, setBaseRate, selectRatesNames } from "../ratesSlice";
import { useLocation, useParams } from "react-router-dom";
import { toLatestRatesChart } from "../../../routes";

export const BaseInput = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const params = useParams();
    const base = useSelector(selectBase);
    const rates = useSelector(selectRatesNames);

    const onInputChange = (event) => {
        dispatch(setBaseRate(event.target.value))
    }

    return (
        <form>
            <label>
                <StyledSpan>Baza:</StyledSpan>
                <Input as="select" value={base} onChange={onInputChange} disabled={location.pathname === toLatestRatesChart(params.id)}>
                    {rates.map(rate => (
                        <option key={rate[0]}>
                            {rate[0]}
                        </option>
                    ))}
                </Input>
            </label>
        </form>
    )
}