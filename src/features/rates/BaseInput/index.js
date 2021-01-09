import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, StyledForm, StyledSpan } from "./styled";
import { selectBase, setBaseRate, selectRatesNames } from "../ratesSlice";

export const BaseInput = () => {
    const dispatch = useDispatch();
    const base = useSelector(selectBase);
    const rates = useSelector(selectRatesNames);

    const onInputChange = (event) => {
        dispatch(setBaseRate(event.target.value))
    }

    return (
        <StyledForm>
            <label>
                <StyledSpan>Baza:</StyledSpan>
                <Input as="select" value={base} onChange={onInputChange}>
                    {rates.map(rate => (
                        <option key={rate[0]}>
                            {rate[0]}
                        </option>
                    ))}
                </Input>
            </label>
        </StyledForm>
    )
}