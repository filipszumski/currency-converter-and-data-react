import { createSlice } from "@reduxjs/toolkit";

const ratesSlice = createSlice({
    name: "rates",
    initialState: {
        rates: [],
        date: "",
        state: "loading",
        base: "PLN"
    },
    reducers: {
        getRates: () => { },
        getRatesSuccess: (state, { payload: rates }) => {
            state.rates = Object.entries(rates.rates).sort((a, b) => a[0].localeCompare(b[0]));
            state.date = state.rates[state.rates.length - 1][0];
            state.base = rates.base;
            state.state = "success";
        },
        getRatesError: (state) => {
            state.state = "error";
        },
        setBaseRate: (state, { payload: baseRate }) => {
            state.base = baseRate;
        }
    },
});

export const { getRates,
    getRatesSuccess,
    getRatesError,
    setBaseRate,
} = ratesSlice.actions;

export const selectRatesState = state => state.rates;
export const selectRates = state => selectRatesState(state).rates;
export const selectLatestDayRates = state => {
    const rates = selectRates(state);

    if (rates !== undefined && rates.length > 0) {
        return Object.entries(rates[rates.length - 1][1]);
    } else {
        return [];
    }
};
export const selectPreviousToLatestDayRates = state => {
    const rates = selectRates(state);

    if (rates !== undefined && rates.length > 0) {
        return Object.entries(rates[rates.length - 2][1]);
    } else {
        return [];
    }
};
export const selectState = state => selectRatesState(state).state;
export const selectDate = state => selectRatesState(state).date;
export const selectBase = state => selectRatesState(state).base;

export default ratesSlice.reducer;
