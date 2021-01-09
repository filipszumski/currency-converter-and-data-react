import React from "react";
import { Button } from "../../styled";
import { Wrapper } from "./style";
import { IncreaseButtonName, DecreaseButtonName } from "../keyNames";

export const Buttons = ({ setTrend }) => {

    const onButtonChange = (event) => {
        const buttonInnerText = event.target.innerText;

        if (buttonInnerText === IncreaseButtonName) {
            setTrend("increase");
        } else {
            setTrend("decrease");
        }
    };

    return (
        <Wrapper>
            <Button trends onClick={onButtonChange}>{IncreaseButtonName}</Button>
            <Button trends onClick={onButtonChange}>{DecreaseButtonName}</Button>
        </Wrapper>
    )
};