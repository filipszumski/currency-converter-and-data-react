import React from "react";
import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

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
    const date = useCurrentDate();

    return (
        <StyledClock>
            Dziś jest
            {" "}
            {formatDate(date)}
        </StyledClock>
    );
};
