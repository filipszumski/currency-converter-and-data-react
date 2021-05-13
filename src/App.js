import React from 'react';
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import { Navigation } from "./common/Navigation";
import { Converter } from "./features/rates/Converter";
import { LatestRates } from "./features/rates/LatestRates";
import { TopRates } from "./features/rates/TopRates";
import { Chart } from "./features/rates/Chart";
import { toConverter, toLatestRates, toChart, toTrends, toLatestRatesChart } from "./routes";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path={toLatestRatesChart()}>
          <Chart />
        </Route>
        <Route path={toConverter()}>
          <Converter />
        </Route>
        <Route path={toLatestRates()}>
          <LatestRates />
        </Route>
        <Route path={toChart()}>
          <Chart />
        </Route>
        <Route path={toTrends()}>
          <TopRates />
        </Route>
        <Route path="/">
          <Redirect to={toConverter()} />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
