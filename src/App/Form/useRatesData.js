import axios from "axios";
import { useState, useEffect } from "react";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading"
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get("https://api.exchangeratesapi.io/latest?base=PLN");

        const {rates, date} = await response.data;

        setRatesData({
          rates,
          date,
          state: "success",
        });
        
      } catch(error){
        console.error(error);
        setRatesData({
          state: "failure",
        })
      };

    }

    setTimeout(fetchRates, 1 * 1000)

  }, []);

  const { rates, date, state } = ratesData;

  return [rates, date, state];
}