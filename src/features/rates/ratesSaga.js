import { call, put, select, takeLatest } from "redux-saga/effects";
import { getRates, getRatesSuccess, getRatesError, selectBase } from "./ratesSlice";
import { fetchRates } from "./fetchRates";

function* getRatesHandler() {
    try {
        const base = yield select(selectBase)
        const rates = yield call(fetchRates, base);
        yield put(getRatesSuccess(rates));
    } catch (error) {
        console.error(error);
        yield put(getRatesError())
    }
};

export function* ratesSaga() {
    yield takeLatest(getRates.type, getRatesHandler)
}