import axios from "axios";
import moment from "moment";

const date = moment().format('YYYY-MM-DD');
const startAtDate = moment().subtract(30, 'days').format('YYYY-MM-DD');

export const fetchRates = async () => {
    const response = await axios.get(`https://api.exchangeratesapi.io/history?start_at=${startAtDate}&end_at=${date}&base=PLN`);
    return await response.data;
};
