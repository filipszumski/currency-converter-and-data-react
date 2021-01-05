import React from "react";
import { Button } from "../../styled";

export const Buttons = ({ setTrend }) => {

    const onButtonChange = (event) => {
        const buttonInnerText = event.target.innerText;

        if (buttonInnerText === "increase") {
            setTrend("increase");
        } else {
            setTrend("decrease");
        }
    };

    return (
        <div>
            <Button onClick={onButtonChange}>increase</Button>
            <Button onClick={onButtonChange}>decrease</Button>
        </div>
    )
};