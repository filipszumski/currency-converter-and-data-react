import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { ratesSaga } from "./features/rates/ratesSaga";
import ratesReducer from "./features/rates/ratesSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        rates: ratesReducer,
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(ratesSaga);

export default store;