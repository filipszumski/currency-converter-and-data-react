import React, { useEffect, useState } from "react";
import { StyledClock } from "./styled";

const formatDate = (date) =>
    date.toLocaleString(undefined, {
        year: "numeric",
        month: "long",
        weekday: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [])

    return (
        <StyledClock>
            Dziś jest
            {" "}
            {formatDate(date)}
        </StyledClock>
    );
};
