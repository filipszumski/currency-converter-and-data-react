import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectState } from "./ratesSlice";

export const useChartData = (dates, rates, name = "EUR") => {
    const loadingState = useSelector(selectState);
    const [chartData, setChartData] = useState();

    useEffect(() => {
        if (dates.length > 0 && rates.length > 0) {
            setChartData({
                labels: dates,
                datasets: [
                    {
                        label: name,
                        data: rates,
                        backgroundColor: new Array(rates.length).fill('rgba(75,192,192,0.6'),
                        borderWidth: 4,
                    },
                ],
            });
        } else {
            return;
        }
    }, [loadingState]);

    return chartData;
}