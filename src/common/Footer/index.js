import React from "react";
import { useSelector } from "react-redux";
import { selectDate } from "../../features/rates/ratesSlice";
import { Paragraph } from "./styled";

export const Footer = () => {

    const date = useSelector(selectDate);

    return (
        <Paragraph info>
            Kursy walut pobierane są z Europejskiego Banku Centralnego.<br />
            Aktualne na dzień: {date}
        </Paragraph>
    )
}