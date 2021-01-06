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
        getRates: (state) => {
            state.state = "loading"
        },
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
        const ratesObject = Object.entries(rates[rates.length - 1][1]);
        const ratesObjectWithoutBase = ratesObject.filter(rate => rate[0] !== state.rates.base)

        const ratesObjectWithoutBaseSorted = ratesObjectWithoutBase.sort((a, b) => a[0].localeCompare(b[0]));
        return ratesObjectWithoutBaseSorted;
    } else {
        return [];
    }
};
export const selectRatesNames = state => {
    const rates = selectRates(state);

    if (rates !== undefined && rates.length > 0) {
        const ratesObject = Object.entries(rates[rates.length - 1][1]);
        const isBaseRateInObject = ratesObject.some((rate) => rate[0] === "EUR")
        if (!isBaseRateInObject) {
            ratesObject.push(["EUR", 1]);
        }
        const ratesObjectSorted = ratesObject.sort((a, b) => a[0].localeCompare(b[0]));
        return ratesObjectSorted;
    } else {
        return [];
    }
};
export const selectPreviousToLatestDayRates = state => {
    const rates = selectRates(state);

    if (rates !== undefined && rates.length > 0) {
        const ratesObject = Object.entries(rates[rates.length - 2][1]);
        const ratesObjectWithoutBase = ratesObject.filter(rate => rate[0] !== state.rates.base)

        const ratesObjectWithoutBaseSorted = ratesObjectWithoutBase.sort((a, b) => a[0].localeCompare(b[0]));
        return ratesObjectWithoutBaseSorted;
    } else {
        return [];
    }
};
export const selectRatesForRank = (state) => {
    const latestDayRates = selectLatestDayRates(state);
    const previousDayRates = selectPreviousToLatestDayRates(state);

    const ratesArrayForRank = latestDayRates.map((rate, index) => ([
        rate[0],
        rate[1],
        previousDayRates[index][1],
        (rate[1] / previousDayRates[index][1] - 1) * 100,
    ]));

    const ratesArrayForRankSorted = ratesArrayForRank.sort((a, b) => a[3] - b[3])

    const ratesArrayForRankSortedDecrease = ratesArrayForRankSorted.slice(0, 5).filter(rate => rate[3] < 0);
    const ratesArrayForRankSortedIncrease = ratesArrayForRankSorted.slice(-5).reverse().filter(rate => rate[3] > 0);

    return {
        ratesIncrease: ratesArrayForRankSortedIncrease,
        ratesDecrease: ratesArrayForRankSortedDecrease,
    }
};
export const selectRatesForChart = (state, id = "EUR") => {
    const rates = selectRates(state);

    const ratesById = rates.map((rate) => ([
        rate[0], rate[1][id],
    ]));

    return ratesById;
};
export const selectState = state => selectRatesState(state).state;
export const selectDate = state => selectRatesState(state).date;
export const selectBase = state => selectRatesState(state).base;

export default ratesSlice.reducer;
