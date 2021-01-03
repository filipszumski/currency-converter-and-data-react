import { call, put, takeLatest } from "redux-saga/effects";
import { getRates, getRatesSuccess, getRatesError } from "./ratesSlice";
import { fetchRates } from "./fetchRates";

function* getRatesHandler() {
    try {
        const rates = yield call(fetchRates);
        yield put(getRatesSuccess(rates));
    } catch (error) {
        console.error(error);
        yield put(getRatesError())
    }
};

export function* ratesSaga() {
    yield takeLatest(getRates.type, getRatesHandler)
}