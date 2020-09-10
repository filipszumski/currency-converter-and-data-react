import React, { useEffect, useState } from "react";
import "./style.css";

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [date])

    return (
        <p className="clock">
            {date.toLocaleDateString(undefined, { year: "numeric", month: "long", weekday: "long", day: "numeric" })}
            {" "}
            {date.toLocaleTimeString()}
        </p>
    );
};

export { Clock };