import { useState, useEffect } from "react";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading"
  });

  useEffect(() => {
    const fetchRates = () => {
      const promise = fetch("https://api.exchangeratesapi.io/latest?base=PLN");

      promise
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }

          return response;
        })
        .then(response => response.json())
        .then(response => {
          const {rates, date} = response;

          setRatesData({
            rates,
            date,
            state: "success",
          })
        })
        .catch(error => {
          console.error(error)
          setRatesData({
            state: "failure"
          })
        })
    }

    setTimeout(fetchRates, 1 * 1000)

  }, []);

  const { rates, date, state } = ratesData;

  return [rates, date, state];
}