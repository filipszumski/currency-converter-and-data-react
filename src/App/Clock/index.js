import React, { useEffect, useState } from "react";
import "./style.css";

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

const Clock = () => {
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
        <p className="clock">
            Dziś jest
            {" "}
            {formatDate(date)}
        </p>
    );
};

export { Clock };