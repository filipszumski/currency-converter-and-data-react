import axios from "axios";
import moment from "moment";

// const date = moment().format('YYYY-MM-DD');
const date = moment().subtract(1, 'days').format('YYYY-MM-DD');
const startAtDate = moment().subtract(30, 'days').format('YYYY-MM-DD');

export const fetchRates = async (base) => {
    const response = await axios.get(`https://api.exchangerate.host/timeseries?start_date=${startAtDate}&end_date=${date}&base=${base}&symbols=USD,EUR,JPY,GBP,AUD,CAD,CHF,CNY,HKD,NZD,SEK,KRW,SGD,NOK,MXN,INR,RUB,ZAR,TRY,BRL,TWD,DKK,PLN,THB,IDR,HUF,CZK,ILS,CLP,PHP,AED,COP,SAR,MYR,RON`);
    return await response.data;
};
